<template>
  <div 
    v-if="show || isAnimating"
    ref="containerRef"
    class="fixed inset-0 bg-white z-[100] flex flex-col items-center justify-center"
    style="opacity: 0;"
  >
    <!-- Logo with fade in -->
    <img 
      ref="logoRef"
      src="~/assets/images/logo_text_transparent_orange.png" 
      alt="Index Tax & Financial Inc." 
      class="w-1/3 select-none" 
      draggable="false"
      style="opacity: 0; transform: translateY(-20px);"
    />
    
    <!-- Loading Bar -->
    <div ref="loadingBarContainerRef" class="w-64 md:w-80 h-1 bg-gray-200 rounded-full overflow-hidden mt-8" style="opacity: 0;">
      <div 
        ref="loadingBarRef"
        class="h-full bg-autumn-ember rounded-full"
        style="width: 0%;"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'

interface Props {
  show: boolean
  duration?: number
}

const props = withDefaults(defineProps<Props>(), {
  duration: 0.7
})

// Calculate durations based on the main duration prop
const fadeInDuration = computed(() => props.duration * 0.43)
const logoDuration = computed(() => props.duration * 1.0)
const barContainerDuration = computed(() => props.duration * 0.71)
const loadingBarDuration = computed(() => props.duration)
const fadeOutDuration = computed(() => props.duration * 0.71)

const containerRef = ref<HTMLElement | null>(null)
const logoRef = ref<HTMLImageElement | null>(null)
const loadingBarContainerRef = ref<HTMLElement | null>(null)
const loadingBarRef = ref<HTMLElement | null>(null)
const isAnimating = ref(false)

let timeline: gsap.core.Timeline | null = null

const cleanup = () => {
  if (timeline) {
    timeline.kill()
    timeline = null
  }
}

const startAnimations = () => {
  if (!containerRef.value || !logoRef.value || !loadingBarRef.value || !loadingBarContainerRef.value) return
  
  cleanup()
  
  gsap.set(containerRef.value, { opacity: 0 })
  gsap.set(logoRef.value, { opacity: 0, y: -20 })
  gsap.set(loadingBarContainerRef.value, { opacity: 0 })
  gsap.set(loadingBarRef.value, { width: '0%' })
  
  timeline = gsap.timeline()
  
  timeline.to(containerRef.value, {
    opacity: 1,
    duration: fadeInDuration.value,
    ease: 'power2.out'
  })
  
  timeline.to(logoRef.value, {
    opacity: 1,
    y: 0,
    duration: logoDuration.value,
    ease: 'power2.out'
  }, '-=0.1')
  
  timeline.to(loadingBarContainerRef.value, {
    opacity: 1,
    duration: barContainerDuration.value,
    ease: 'power2.out'
  }, '-=0.6')
  
  timeline.to(loadingBarRef.value, {
    width: '100%',
    duration: loadingBarDuration.value,
    ease: 'power1.inOut'
  }, '-=0.3')
}

const fadeOut = () => {
  if (!containerRef.value) {
    setTimeout(() => fadeOut(), 50)
    return
  }
  
  gsap.killTweensOf(containerRef.value)
  
  gsap.to(containerRef.value, {
    opacity: 0,
    duration: fadeOutDuration.value,
    ease: 'power2.in',
    onComplete: () => {
      isAnimating.value = false
      cleanup()
    }
  })
}

watch(() => props.show, (newValue) => {
  if (newValue) {
    isAnimating.value = true
    nextTick(() => startAnimations())
  } else {
    if (!isAnimating.value) {
      isAnimating.value = true
    }
    nextTick(() => fadeOut())
  }
})

onMounted(() => {
  if (props.show) {
    nextTick(() => startAnimations())
  }
})

onBeforeUnmount(() => {
  cleanup()
})
</script>

