<template>
  <!-- Hero Section -->
  <section class="relative bg-coffee-bean text-white overflow-hidden h-[80vh] flex flex-col gap-y-10 justify-center items-center">
    <div class="absolute inset-0 z-0 opacity-30">
      <img src="~/assets/images/landing-bg.jpeg" alt="Office Skyscraper Low Angle" class="w-full h-full object-cover select-none" draggable="false" />
    </div>
    <img ref="logoRef" src="~/assets/images/logo_text_transparent_white.png" alt="Index Tax & Financial Inc." class="w-1/2 select-none" draggable="false" />
    <div class="container mx-auto px-4 relative z-10 text-center w-full">
      <h1 ref="titleRef" class="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight">
        {{ $t('hero.title') }}
      </h1>
      <p ref="subtitleRef" class="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
        {{ $t('hero.subtitle') }}
      </p>
      <NuxtLink 
        ref="ctaRef"
        to="#contact" 
        class="inline-block bg-autumn-ember hover:bg-copper text-white font-bold py-3 px-8 rounded transition-colors duration-300 shadow-lg"
      >
        {{ $t('hero.cta') }}
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const logoRef = ref<HTMLElement | null>(null)
const titleRef = ref<HTMLElement | null>(null)
const subtitleRef = ref<HTMLElement | null>(null)
const ctaRef = ref<HTMLElement | null>(null)

onMounted(() => {
  // Create a timeline for sequential animations
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
  
  // Animate elements in sequence
  tl.from(logoRef.value, {
    duration: 1,
    y: -50,
    opacity: 0,
  })
  .from(titleRef.value, {
    duration: 0.8,
    y: 30,
    opacity: 0,
  }, '-=0.5') // Start 0.5s before previous animation ends
  .from(subtitleRef.value, {
    duration: 0.8,
    y: 30,
    opacity: 0,
  }, '-=0.4')
  .from(ctaRef.value, {
    duration: 0.8,
    y: 30,
    opacity: 0,
    scale: 0.9,
  }, '-=0.4')
})
</script>
