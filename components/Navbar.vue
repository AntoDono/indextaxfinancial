<script setup lang="ts">
const { locale, setLocale } = useI18n()
const localePath = useLocalePath()

const isDropdownOpen = ref(false)
const isMobileMenuOpen = ref(false)

const toggleLocale = (newLocale: 'en' | 'zh') => {
  setLocale(newLocale)
  isDropdownOpen.value = false
}

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  // Prevent body scroll when menu is open
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  document.body.style.overflow = ''
}

// Smooth scroll to section
const scrollToSection = (hash: string) => {
  if (!import.meta.client) return
  
  const element = document.querySelector(hash)
  if (!element) return
  
  const headerOffset = 80 // Height of sticky header
  const elementPosition = element.getBoundingClientRect().top
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset
  
  // Smooth scroll to the calculated position
  window.scrollTo({
    top: Math.max(0, offsetPosition),
    behavior: 'smooth'
  })
}

// Handle navigation clicks
const handleNavClick = (hash: string, event: Event) => {
  // ALWAYS prevent default first to stop instant jump
  event.preventDefault()
  event.stopPropagation()
  
  if (!import.meta.client) return
  
  const currentPath = window.location.pathname
  const targetPath = localePath('/')
  
  // Close mobile menu
  closeMobileMenu()
  
  // If already on home page, scroll immediately with smooth behavior
  if (currentPath === targetPath) {
    // Use a small delay to ensure any animations complete
    setTimeout(() => {
      scrollToSection(hash)
    }, 10)
  } else {
    // If not on home page, navigate first, then scroll after navigation
    const router = useRouter()
    router.push(targetPath + hash).then(() => {
      // Wait for DOM to update, then scroll
      nextTick(() => {
        setTimeout(() => {
          scrollToSection(hash)
        }, 50)
      })
    })
  }
}

// Handle home click - scroll to top if already on home page
const handleHomeClick = (event: Event) => {
  if (!import.meta.client) return
  
  const currentPath = window.location.pathname
  const targetPath = localePath('/')
  
  if (currentPath === targetPath) {
    event.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

// Handle mobile home click
const handleMobileHomeClick = (event: Event) => {
  if (!import.meta.client) return
  
  const currentPath = window.location.pathname
  const targetPath = localePath('/')
  
  if (currentPath === targetPath) {
    event.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  closeMobileMenu()
}

// Close dropdown when clicking outside
const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  if (!target.closest('.language-dropdown')) {
    isDropdownOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
  document.body.style.overflow = ''
})
</script>

<template>
  <header class="bg-copper text-white shadow-md sticky top-0 z-50">
    <div class="container mx-auto px-4 md:px-16">
      <div class="flex justify-between items-center py-2">
        <!-- Logo -->
        <NuxtLink :to="localePath('/')" class="flex items-center p-2 z-50" @click="closeMobileMenu">
          <img src="~/assets/images/logo_transparent_white.png" alt="Index Tax & Financial Inc." class="w-12 md:w-16" />
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex flex-row items-center justify-center gap-x-2">
          <NuxtLink 
            :to="localePath('/')" 
            class="px-2 hover:text-autumn-ember transition-colors"
            @click="handleHomeClick"
          >
            {{ $t('nav.home') }}
          </NuxtLink>
          <NuxtLink 
            :to="localePath('/') + '#services'" 
            class="px-2 hover:text-autumn-ember transition-colors"
            @click="(e: Event) => handleNavClick('#services', e)"
          >
            {{ $t('nav.services') }}
          </NuxtLink>
          <NuxtLink 
            :to="localePath('/') + '#about'" 
            class="px-2 hover:text-autumn-ember transition-colors"
            @click="(e: Event) => handleNavClick('#about', e)"
          >
            {{ $t('nav.about') }}
          </NuxtLink>
          <NuxtLink 
            :to="localePath('/') + '#contact'" 
            class="px-2 hover:text-autumn-ember transition-colors"
            @click="(e: Event) => handleNavClick('#contact', e)"
          >
            {{ $t('nav.contact') }}
          </NuxtLink>
  
          <!-- Language Switcher Dropdown -->
          <div class="language-dropdown relative ml-4">
            <button 
              @click="toggleDropdown" 
              class="border border-white/30 px-3 py-1 rounded hover:bg-white/10 transition-colors text-sm font-serif flex items-center gap-1"
            >
              {{ locale === 'en' ? 'English' : '中文' }}
              <svg class="w-4 h-4 transition-transform" :class="{ 'rotate-180': isDropdownOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            
            <div 
              v-if="isDropdownOpen"
              class="absolute right-0 mt-2 w-32 bg-coffee-bean border border-white/30 rounded shadow-lg overflow-hidden"
            >
              <button
                @click="toggleLocale('en')"
                :class="['w-full text-left px-3 py-2 text-sm hover:bg-white/10 transition-colors', locale === 'en' ? 'bg-white/20' : '']"
              >
                English
              </button>
              <button
                @click="toggleLocale('zh')"
                :class="['w-full text-left px-3 py-2 text-sm hover:bg-white/10 transition-colors', locale === 'zh' ? 'bg-white/20' : '']"
              >
                中文
              </button>
            </div>
          </div>
        </nav>

        <!-- Mobile Hamburger Button -->
        <button
          @click="toggleMobileMenu"
          class="md:hidden z-50 p-2 rounded-lg hover:bg-white/10 transition-colors"
          :aria-label="isMobileMenuOpen ? 'Close menu' : 'Open menu'"
        >
          <div class="w-6 h-6 flex flex-col justify-center items-center space-y-1.5">
            <span
              class="block h-0.5 w-6 bg-white transition-all duration-300 ease-out"
              :class="isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''"
            ></span>
            <span
              class="block h-0.5 w-6 bg-white transition-all duration-300 ease-out"
              :class="isMobileMenuOpen ? 'opacity-0' : ''"
            ></span>
            <span
              class="block h-0.5 w-6 bg-white transition-all duration-300 ease-out"
              :class="isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''"
            ></span>
          </div>
        </button>
      </div>

      <!-- Mobile Menu Overlay -->
      <div
        class="fixed inset-0 bg-coffee-bean/95 backdrop-blur-sm z-40 md:hidden transition-all duration-300 ease-in-out"
        :class="isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'"
        @click="closeMobileMenu"
      >
        <nav
          class="absolute top-0 right-0 h-full w-80 bg-copper shadow-2xl transform transition-transform duration-300 ease-in-out overflow-y-auto"
          :class="isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'"
          @click.stop
        >
          <div class="flex flex-col h-full pt-20 px-6">
            <!-- Mobile Navigation Links -->
            <NuxtLink
              :to="localePath('/')"
              @click="handleMobileHomeClick"
              class="py-4 text-xl font-serif border-b border-white/20 hover:text-autumn-ember transition-colors"
            >
              {{ $t('nav.home') }}
            </NuxtLink>
            <NuxtLink
              :to="localePath('/') + '#services'"
              @click="(e: Event) => handleNavClick('#services', e)"
              class="py-4 text-xl font-serif border-b border-white/20 hover:text-autumn-ember transition-colors"
            >
              {{ $t('nav.services') }}
            </NuxtLink>
            <NuxtLink
              :to="localePath('/') + '#about'"
              @click="(e: Event) => handleNavClick('#about', e)"
              class="py-4 text-xl font-serif border-b border-white/20 hover:text-autumn-ember transition-colors"
            >
              {{ $t('nav.about') }}
            </NuxtLink>
            <NuxtLink
              :to="localePath('/') + '#contact'"
              @click="(e: Event) => handleNavClick('#contact', e)"
              class="py-4 text-xl font-serif border-b border-white/20 hover:text-autumn-ember transition-colors"
            >
              {{ $t('nav.contact') }}
            </NuxtLink>

            <!-- Mobile Language Switcher -->
            <div class="mt-8 pt-8 border-t border-white/20">
              <p class="text-sm text-white/70 mb-4 uppercase tracking-wider">Language</p>
              <button
                @click="toggleLocale('en'); closeMobileMenu()"
                :class="['w-full text-left py-3 px-4 rounded-lg transition-colors', locale === 'en' ? 'bg-white/20 text-autumn-ember' : 'hover:bg-white/10']"
              >
                English
              </button>
              <button
                @click="toggleLocale('zh'); closeMobileMenu()"
                :class="['w-full text-left py-3 px-4 rounded-lg transition-colors mt-2', locale === 'zh' ? 'bg-white/20 text-autumn-ember' : 'hover:bg-white/10']"
              >
                中文
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

