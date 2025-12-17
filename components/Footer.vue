<script setup lang="ts">
const localePath = useLocalePath()
</script>

<template>
  <footer id="contact" class="bg-charcoal text-white">
    <div class="container mx-auto px-6 lg:px-8">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 border-b border-white/10">
        <!-- Brand Section -->
        <div class="lg:col-span-1">
          <NuxtLink :to="localePath('/')" class="inline-block mb-6 transition-transform hover:scale-105">
            <img 
              src="~/assets/images/logo_text_transparent_white.png" 
              alt="Index Tax & Financial Inc." 
              class="h-14 w-auto"
            />
          </NuxtLink>
          <p class="text-gray-400 text-sm leading-relaxed max-w-xs">
            {{ $t('footer.description') }}
          </p>
        </div>

        <!-- Quick Links Section -->
        <div>
          <h3 class="text-base font-serif font-semibold text-copper mb-6 tracking-wide">
            {{ $t('footer.quickLinks') }}
          </h3>
          <ul class="space-y-3">
            <li>
              <NuxtLink 
                :to="localePath('/')" 
                class="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm"
              >
                {{ $t('nav.home') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink 
                :to="localePath('/') + '#services'" 
                class="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm"
              >
                {{ $t('nav.services') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink 
                :to="localePath('/') + '#about'" 
                class="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm"
              >
                {{ $t('nav.about') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink 
                :to="localePath('/') + '#contact'" 
                class="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm"
              >
                {{ $t('nav.contact') }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Services Section -->
        <div>
          <h3 class="text-base font-serif font-semibold text-copper mb-6 tracking-wide">
            {{ $t('nav.services') }}
          </h3>
          <ul class="space-y-3">
            <li>
              <NuxtLink 
                :to="localePath('/') + '#services'" 
                class="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm"
              >
                {{ $t('services.tax.title') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink 
                :to="localePath('/') + '#services'" 
                class="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm"
              >
                {{ $t('services.planning.title') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink 
                :to="localePath('/') + '#services'" 
                class="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm"
              >
                {{ $t('services.bookkeeping.title') }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact Section -->
        <div>
          <h3 class="text-base font-serif font-semibold text-copper mb-6 tracking-wide">
            {{ $t('footer.getInTouch') }}
          </h3>
          <div class="space-y-5">
            <!-- Company Name -->
            <div>
              <p class="text-white font-semibold text-sm mb-4">
                {{ $t('footer.companyName') }}
              </p>
            </div>

            <!-- Address -->
            <div class="flex items-start gap-3 group">
              <svg 
                class="w-5 h-5 text-copper flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span class="text-gray-400 text-sm leading-relaxed">
                {{ $t('contact.address') }}
              </span>
            </div>

            <!-- Phone -->
            <div class="flex items-start gap-3 group">
              <svg 
                class="w-5 h-5 text-copper flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div class="flex flex-col gap-2">
                <a 
                  href="tel:+16262880830" 
                  class="text-gray-400 hover:text-copper transition-colors duration-200 text-sm"
                >
                  {{ $t('contact.phone') }}
                </a>
                <a 
                  href="tel:+16262880831" 
                  class="text-gray-400 hover:text-copper transition-colors duration-200 text-sm"
                >
                  {{ $t('contact.phone2') }}
                </a>
              </div>
            </div>

            <!-- Email -->
            <div class="flex items-start gap-3 group">
              <svg 
                class="w-5 h-5 text-copper flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a 
                href="mailto:info@indextf.com" 
                class="text-gray-400 hover:text-copper transition-colors duration-200 text-sm"
              >
                {{ $t('contact.email') }}
              </a>
            </div>

            <!-- Business Hours -->
            <div class="pt-4 border-t border-white/5">
              <h4 class="text-sm font-semibold text-white mb-3">
                {{ $t('footer.hours') }}
              </h4>
              <p class="text-gray-400 text-sm mb-1">
                {{ $t('footer.openToday') }}
              </p>
              <p class="text-gray-400 text-sm">
                {{ $t('footer.hoursTime') }}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Bottom Bar -->
      <div class="py-6">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-xs text-gray-500 text-center md:text-left">
            &copy; {{ new Date().getFullYear() }} Index Tax & Financial Inc. {{ $t('footer.rights') }}
          </p>
          <div class="flex flex-wrap justify-center gap-6">
            <NuxtLink 
              to="/privacy" 
              class="text-xs text-gray-500 hover:text-copper transition-colors duration-200"
            >
              {{ $t('footer.privacy') }}
            </NuxtLink>
            <NuxtLink 
              to="/terms" 
              class="text-xs text-gray-500 hover:text-copper transition-colors duration-200"
            >
              {{ $t('footer.terms') }}
            </NuxtLink>
            <NuxtLink 
              to="/sitemap" 
              class="text-xs text-gray-500 hover:text-copper transition-colors duration-200"
            >
              {{ $t('footer.sitemap') }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

