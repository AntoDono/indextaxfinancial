<template>
  <section ref="sectionRef" class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-serif font-bold text-coffee-bean mb-4">
          {{ $t('expertise.title') }}
        </h2>
        <div class="w-24 h-1 bg-autumn-ember mx-auto rounded-full"></div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <div 
          v-for="(stat, index) in stats" 
          :key="index"
          class="text-center"
        >
          <div class="text-5xl md:text-6xl font-montserrat font-bold text-autumn-ember mb-3">
            {{ displayValues[index] }}
          </div>
          <div class="text-gray-600 text-sm md:text-base font-medium">
            {{ stat.label }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const stats = computed(() => [
  {
    value: t('stats.years.value'),
    label: t('stats.years.label')
  },
  {
    value: t('stats.clients.value'),
    label: t('stats.clients.label')
  },
  {
    value: t('stats.big4.value'),
    label: t('stats.big4.label')
  },
  {
    value: t('stats.success.value'),
    label: t('stats.success.label')
  }
])

const displayValues = ref(['0', '0', '0', '0'])
const hasAnimated = ref(false)

// Parse stat value to extract number and suffix
const parseStatValue = (value: string) => {
  const match = value.match(/(\d+)([+%]?)/)
  if (!match || !match[1]) return { number: 0, suffix: '' }
  return {
    number: parseInt(match[1], 10),
    suffix: (match[2] ?? '')
  }
}

const animateValue = (index: number) => {
  const stat = stats.value[index]
  if (!stat) return
  const statValue = stat.value
  const { number: targetValue, suffix } = parseStatValue(statValue)
  
  const duration = 2000
  const steps = 60
  const increment = targetValue / steps
  let current = 0
  
  const timer = setInterval(() => {
    current += increment
    if (current >= targetValue) {
      displayValues.value[index] = `${targetValue}${suffix}`
      clearInterval(timer)
    } else {
      // Easing function for smooth animation (ease-out cubic)
      const progress = current / targetValue
      const eased = 1 - Math.pow(1 - progress, 3)
      const currentValue = Math.floor(targetValue * eased)
      displayValues.value[index] = `${currentValue}${suffix}`
    }
  }, duration / steps)
}

const sectionRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!sectionRef.value) return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated.value) {
          hasAnimated.value = true
          stats.value.forEach((_, index) => {
            setTimeout(() => {
              animateValue(index)
            }, index * 150)
          })
        }
      })
    },
    { threshold: 0.3 }
  )

  observer.observe(sectionRef.value)

  onBeforeUnmount(() => {
    observer.disconnect()
  })
})
</script>

