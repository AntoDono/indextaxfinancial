<script setup lang="ts">
const { locale, setLocale } = useI18n()
const localePath = useLocalePath()

const isDropdownOpen = ref(false)

const toggleLocale = (newLocale: 'en' | 'zh') => {
  setLocale(newLocale)
  isDropdownOpen.value = false
}

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
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
})
</script>

<template>
  <header class="bg-copper text-white shadow-md sticky top-0 z-50">
    <div class="flex justify-between items-center w-full pl-16 pr-16 pt-2 pb-2">
      <!-- Logo -->
      <NuxtLink :to="localePath('/')" class="flex items-center p-2">
        <img src="~/assets/images/logo_transparent_white.png" alt="Index Tax & Financial Inc." class="w-16" />
      </NuxtLink>

      <!-- Navigation -->
       <span class="flex flex-row items-center justify-center gap-x-2">
          <NuxtLink :to="localePath('/')" class="px-2 hover:text-copper transition-colors">{{ $t('nav.home') }}</NuxtLink>
          <NuxtLink :to="localePath('/') + '#services'" class="px-2 hover:text-copper transition-colors">{{ $t('nav.services') }}</NuxtLink>
          <NuxtLink :to="localePath('/') + '#about'" class="px-2 hover:text-copper transition-colors">{{ $t('nav.about') }}</NuxtLink>
          <NuxtLink :to="localePath('/') + '#contact'" class="px-2 hover:text-copper transition-colors">{{ $t('nav.contact') }}</NuxtLink>
  
         <!-- Language Switcher Dropdown -->
         <div class="language-dropdown relative ml-4">
           <button 
             @click="toggleDropdown" 
             class="border border-white/30 px-3 py-1 rounded hover:bg-white/10 transition-colors text-sm font-serif flex items-center gap-1"
           >
             {{ locale === 'en' ? 'English' : '中文' }}
             <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
       </span>
    </div>
  </header>
</template>

