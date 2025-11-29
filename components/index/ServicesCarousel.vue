<template>
  <div class="relative overflow-hidden py-4">
    <!-- Carousel Container -->
    <div 
      class="flex transition-transform duration-700 ease-in-out"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <!-- Row 1 -->
      <div class="min-w-full flex-shrink-0">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 px-2 max-w-4xl mx-auto">
          <IndexServiceCard
            v-for="(service, index) in row1"
            :key="`row1-${index}`"
            :title="service.title"
            :description="service.desc"
            :icon="getIcon(index)"
          />
        </div>
      </div>
      
      <!-- Row 2 -->
      <div class="min-w-full flex-shrink-0">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 px-2 max-w-4xl mx-auto">
          <IndexServiceCard
            v-for="(service, index) in row2"
            :key="`row2-${index}`"
            :title="service.title"
            :description="service.desc"
            :icon="getIcon(index + 3)"
          />
        </div>
      </div>
      
      <!-- Row 3 -->
      <div v-if="row3.length > 0" class="min-w-full flex-shrink-0">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 px-2 max-w-4xl mx-auto">
          <IndexServiceCard
            v-for="(service, index) in row3"
            :key="`row3-${index}`"
            :title="service.title"
            :description="service.desc"
            :icon="getIcon(index + 6)"
          />
        </div>
      </div>
    </div>

    <!-- Navigation Dots -->
    <div class="flex justify-center gap-2 mt-10">
      <button
        v-for="(row, index) in rows"
        :key="index"
        @click="currentIndex = index"
        class="h-2 rounded-full transition-all duration-300"
        :class="currentIndex === index ? 'bg-autumn-ember w-8' : 'bg-gray-300 w-2'"
        :aria-label="`Go to slide ${index + 1}`"
      />
    </div>

    <!-- Navigation Arrows -->
    <button
      v-if="rows.length > 1"
      @click="previous"
      class="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors z-10 hidden md:block"
      aria-label="Previous slide"
    >
      <svg class="w-6 h-6 text-coffee-bean" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    <button
      v-if="rows.length > 1"
      @click="next"
      class="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors z-10 hidden md:block"
      aria-label="Next slide"
    >
      <svg class="w-6 h-6 text-coffee-bean" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

const allServices = computed(() => [
  {
    title: t('services.corporate.usEntry.title'),
    desc: t('services.corporate.usEntry.desc')
  },
  {
    title: t('services.corporate.financialAssurance.title'),
    desc: t('services.corporate.financialAssurance.desc')
  },
  {
    title: t('services.corporate.commercialAdvisory.title'),
    desc: t('services.corporate.commercialAdvisory.desc')
  },
  {
    title: t('services.private.assetStructuring.title'),
    desc: t('services.private.assetStructuring.desc')
  },
  {
    title: t('services.private.wealthPreservation.title'),
    desc: t('services.private.wealthPreservation.desc')
  },
  {
    title: t('services.private.irsRepresentation.title'),
    desc: t('services.private.irsRepresentation.desc')
  },
  {
    title: t('services.digital.ecommerce.title'),
    desc: t('services.digital.ecommerce.desc')
  }
])

const row1 = computed(() => allServices.value.slice(0, 3))
const row2 = computed(() => allServices.value.slice(3, 6))
const row3 = computed(() => allServices.value.slice(6))

const rows = computed(() => [row1.value, row2.value, row3.value].filter(row => row.length > 0))

const currentIndex = ref(0)

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % rows.value.length
}

const previous = () => {
  currentIndex.value = currentIndex.value === 0 ? rows.value.length - 1 : currentIndex.value - 1
}

const getIcon = (index: number) => {
  const icons = ['building', 'chart', 'handshake', 'globe', 'currency', 'scale', 'shopping']
  return icons[index % icons.length]
}

// Auto-advance carousel
onMounted(() => {
  const interval = setInterval(() => {
    next()
  }, 5000)

  onBeforeUnmount(() => {
    clearInterval(interval)
  })
})
</script>

