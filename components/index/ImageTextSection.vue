<template>
  <section ref="sectionRef" :id="sectionId" :class="['py-20', props.bgColor]">
    <div class="container mx-auto px-4">
      <div 
        class="flex flex-col items-center gap-12"
        :class="props.imageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'"
      >
        <!-- Image -->
        <div 
          ref="imageRef"
          class="w-full lg:w-1/2 transition-all duration-1000 ease-out"
          :class="isVisible ? 'opacity-100 lg:translate-x-0 translate-y-0' : imageLeft ? 'opacity-0 lg:-translate-x-12 translate-y-8' : 'opacity-0 lg:translate-x-12 translate-y-8'"
        >
          <div class="relative rounded-lg overflow-hidden shadow-2xl">
            <img 
              :src="props.imageSrc" 
              :alt="props.imageAlt" 
              class="w-full h-[400px] md:h-[500px] object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>

        <!-- Content -->
        <div 
          ref="contentRef"
          class="w-full lg:w-1/2 space-y-6 transition-all duration-1000 ease-out delay-200"
          :class="isVisible ? 'opacity-100 lg:translate-x-0 translate-y-0' : imageLeft ? 'opacity-0 lg:translate-x-12 translate-y-8' : 'opacity-0 lg:-translate-x-12 translate-y-8'"
        >
          <div v-if="props.subtitle" class="text-copper font-serif text-lg uppercase tracking-wider">
            {{ props.subtitle }}
          </div>
          <h2 class="text-4xl md:text-5xl font-serif font-bold" :class="props.textColor">
            {{ props.title }}
          </h2>
          <div class="w-20 h-1 bg-autumn-ember rounded-full"></div>
          <p class="text-lg leading-relaxed" :class="props.descColor">
            {{ props.description }}
          </p>
          <div v-if="props.features" class="space-y-4 pt-4">
            <div 
              v-for="(feature, index) in props.features" 
              :key="index"
              class="flex items-start gap-4"
            >
              <div class="flex-shrink-0 w-8 h-8 rounded-full bg-autumn-ember/20 flex items-center justify-center mt-1">
                <svg class="w-5 h-5 text-autumn-ember" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div>
                <h3 class="font-bold text-lg mb-1" :class="props.textColor">{{ feature.title }}</h3>
                <p class="text-sm" :class="props.descColor">{{ feature.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Feature {
  title: string
  desc: string
}

interface Props {
  id?: string
  title: string
  subtitle?: string
  description: string
  imageSrc: string
  imageAlt: string
  imageLeft?: boolean
  bgColor?: string
  textColor?: string
  descColor?: string
  features?: Feature[]
}

const props = withDefaults(defineProps<Props>(), {
  imageLeft: true,
  bgColor: 'bg-white',
  textColor: 'text-coffee-bean',
  descColor: 'text-gray-700'
})

const sectionId = computed(() => props.id)

const sectionRef = ref<HTMLElement | null>(null)
const imageRef = ref<HTMLElement | null>(null)
const contentRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

onMounted(() => {
  if (!sectionRef.value) return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
        }
      })
    },
    { threshold: 0.2 }
  )

  observer.observe(sectionRef.value)

  onBeforeUnmount(() => {
    observer.disconnect()
  })
})
</script>

