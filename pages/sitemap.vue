<template>
  <div class="min-h-screen bg-white">
    <div class="container mx-auto px-4 py-16">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-serif font-bold text-coffee-bean mb-8">
          {{ $t('footer.sitemap') }}
        </h1>
        <div class="prose prose-lg max-w-none">
          <h2 class="text-2xl font-serif font-bold text-coffee-bean mb-4 mt-8">Main Pages</h2>
          <ul class="space-y-2">
            <li>
              <NuxtLink :to="localePath('/')" class="text-copper hover:text-autumn-ember transition-colors">
                {{ $t('nav.home') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/') + '#services'" class="text-copper hover:text-autumn-ember transition-colors">
                {{ $t('nav.services') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/') + '#about'" class="text-copper hover:text-autumn-ember transition-colors">
                {{ $t('nav.about') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/') + '#contact'" class="text-copper hover:text-autumn-ember transition-colors">
                {{ $t('nav.contact') }}
              </NuxtLink>
            </li>
          </ul>

          <h2 class="text-2xl font-serif font-bold text-coffee-bean mb-4 mt-8">Legal</h2>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/privacy" class="text-copper hover:text-autumn-ember transition-colors">
                {{ $t('footer.privacy') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/terms" class="text-copper hover:text-autumn-ember transition-colors">
                {{ $t('footer.terms') }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="mt-12">
          <NuxtLink 
            :to="localePath('/')" 
            class="inline-block bg-copper hover:bg-autumn-ember text-white font-semibold py-3 px-6 rounded transition-colors duration-300"
          >
            ← Back to Home
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>

