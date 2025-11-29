<script setup lang="ts">
const localePath = useLocalePath()
</script>

<template>
  <footer class="bg-charcoal text-white pt-16 pb-8">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <!-- Brand -->
        <div class="lg:col-span-1">
          <NuxtLink :to="localePath('/')" class="inline-block mb-4">
            <img src="~/assets/images/logo_text_transparent_white.png" alt="Index Tax & Financial Inc." class="h-12" />
          </NuxtLink>
          <p class="text-gray-300 text-sm leading-relaxed mb-4">
            {{ $t('hero.subtitle') }}
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-serif mb-4 text-copper font-semibold">{{ $t('footer.quickLinks') }}</h3>
          <ul class="space-y-3 text-sm">
            <li>
              <NuxtLink :to="localePath('/')" class="text-gray-300 hover:text-copper transition-colors duration-200">
                {{ $t('nav.home') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/') + '#services'" class="text-gray-300 hover:text-copper transition-colors duration-200">
                {{ $t('nav.services') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/') + '#about'" class="text-gray-300 hover:text-copper transition-colors duration-200">
                {{ $t('nav.about') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/') + '#contact'" class="text-gray-300 hover:text-copper transition-colors duration-200">
                {{ $t('nav.contact') }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h3 class="text-lg font-serif mb-4 text-copper font-semibold">{{ $t('nav.services') }}</h3>
          <ul class="space-y-3 text-sm">
            <li>
              <NuxtLink :to="localePath('/') + '#services'" class="text-gray-300 hover:text-copper transition-colors duration-200">
                {{ $t('services.tax.title') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/') + '#services'" class="text-gray-300 hover:text-copper transition-colors duration-200">
                {{ $t('services.planning.title') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/') + '#services'" class="text-gray-300 hover:text-copper transition-colors duration-200">
                {{ $t('services.bookkeeping.title') }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-lg font-serif mb-4 text-copper font-semibold">{{ $t('footer.getInTouch') }}</h3>
          <ul class="space-y-3 text-sm text-gray-300">
            <li class="flex items-start">
              <svg class="w-5 h-5 mr-2 mt-0.5 text-copper flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <span>{{ $t('contact.address') }}</span>
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 mr-2 text-copper flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              <a href="tel:+15551234567" class="hover:text-copper transition-colors duration-200">
                {{ $t('contact.phone') }}
              </a>
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 mr-2 text-copper flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <a href="mailto:info@index111.com" class="hover:text-copper transition-colors duration-200">
                info@index111.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <!-- Bottom Bar -->
      <div class="border-t border-white/10 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-xs text-gray-400">
            &copy; {{ new Date().getFullYear() }} Index Tax & Financial Inc. {{ $t('footer.rights') }}
          </p>
          <div class="flex flex-wrap gap-6 text-xs">
            <NuxtLink to="/privacy" class="text-gray-400 hover:text-copper transition-colors duration-200">
              {{ $t('footer.privacy') }}
            </NuxtLink>
            <NuxtLink to="/terms" class="text-gray-400 hover:text-copper transition-colors duration-200">
              {{ $t('footer.terms') }}
            </NuxtLink>
            <NuxtLink to="/sitemap" class="text-gray-400 hover:text-copper transition-colors duration-200">
              {{ $t('footer.sitemap') }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

