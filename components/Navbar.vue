<script setup lang="ts">
const { locale, setLocale } = useI18n()
const localePath = useLocalePath()

const toggleLocale = () => {
  setLocale(locale.value === 'en' ? 'zh' : 'en')
}
</script>

<template>
  <header class="bg-coffee-bean text-white shadow-md sticky top-0 z-50">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <!-- Logo -->
      <NuxtLink :to="localePath('/')" class="flex items-center">
        <img src="~/assets/images/logo_text_transparent_white.png" alt="Index Tax & Financial Inc." class="h-12 w-auto" />
      </NuxtLink>

      <!-- Navigation -->
      <nav class="hidden md:flex space-x-8 text-sm font-medium tracking-wide uppercase">
        <NuxtLink :to="localePath('/')" class="hover:text-copper transition-colors">{{ $t('nav.home') }}</NuxtLink>
        <NuxtLink :to="localePath('/') + '#services'" class="hover:text-copper transition-colors">{{ $t('nav.services') }}</NuxtLink>
        <NuxtLink :to="localePath('/') + '#about'" class="hover:text-copper transition-colors">{{ $t('nav.about') }}</NuxtLink>
        <NuxtLink :to="localePath('/') + '#contact'" class="hover:text-copper transition-colors">{{ $t('nav.contact') }}</NuxtLink>
      </nav>

      <!-- Language Switcher -->
      <button 
        @click="toggleLocale" 
        class="border border-white/30 px-3 py-1 rounded hover:bg-white/10 transition-colors text-sm font-serif"
      >
        {{ locale === 'en' ? '中文' : 'English' }}
      </button>
    </div>
  </header>
</template>

