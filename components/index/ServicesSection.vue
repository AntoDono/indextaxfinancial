<template>
  <!-- Services Section -->
  <section id="services" class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-serif font-bold text-coffee-bean mb-4">{{ $t('services.title') }}</h2>
        <div class="w-24 h-1 bg-autumn-ember mx-auto rounded-full"></div>
      </div>

      <div class="max-w-6xl mx-auto">
        <div ref="gridRef" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          <div
            v-for="(service, index) in allServices"
            :key="index"
            :ref="(el: HTMLElement | null) => { 
              if (el) {
                const element = el as HTMLElement
                itemRefs[index] = element
              }
            }"
            class="opacity-0"
          >
            <IndexServiceItem
              :title="service.title"
              :description="service.desc"
              :icon="getIcon(index)"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const { t } = useI18n()

const gridRef = ref<HTMLElement | null>(null)
const itemRefs = ref<(HTMLElement | null)[]>([])

const allServices = computed(() => [
  {
    title: t('services.international.globalTax.title'),
    desc: t('services.international.globalTax.desc')
  },
  {
    title: t('services.international.assetReporting.title'),
    desc: t('services.international.assetReporting.desc')
  },
  {
    title: t('services.corporate.formation.title'),
    desc: t('services.corporate.formation.desc')
  },
  {
    title: t('services.corporate.financial.title'),
    desc: t('services.corporate.financial.desc')
  },
  {
    title: t('services.investment.realEstate.title'),
    desc: t('services.investment.realEstate.desc')
  },
  {
    title: t('services.investment.familyOffice.title'),
    desc: t('services.investment.familyOffice.desc')
  },
  {
    title: t('services.enterprise.taxManagement.title'),
    desc: t('services.enterprise.taxManagement.desc')
  },
  {
    title: t('services.enterprise.marketExpansion.title'),
    desc: t('services.enterprise.marketExpansion.desc')
  }
])

const getIcon = (index: number): string => {
  const icons = ['building', 'chart', 'handshake', 'globe', 'currency', 'scale', 'shopping', 'building']
  return icons[index % icons.length] || 'default'
}

onMounted(() => {
  if (import.meta.client) {
    gsap.registerPlugin(ScrollTrigger)
    
    nextTick(() => {
      itemRefs.value.forEach((item, index) => {
        if (item) {
          gsap.fromTo(
            item,
            {
              opacity: 0,
              y: 50
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power1.inOut',
              delay: index * 0.1,
              scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                end: 'bottom 20%',
                toggleActions: 'play none none none'
              }
            }
          )
        }
      })
    })
  }
})
</script>
