<template>
  <div class="mb-12">
    <h3 class="text-2xl md:text-3xl font-serif font-bold text-coffee-bean mb-8 text-center">
      {{ title }}
    </h3>
    <div 
      class="grid gap-6"
      :class="services.length === 1 ? 'grid-cols-1 md:grid-cols-1 max-w-2xl mx-auto' : 'grid-cols-1 md:grid-cols-3'"
    >
      <IndexServiceCard
        v-for="(service, index) in services"
        :key="index"
        :title="service.title"
        :description="service.desc"
        :icon="getIcon(index)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Service {
  title: string
  desc: string
}

interface Props {
  title: string
  services: Service[]
}

defineProps<Props>()

const getIcon = (index: number) => {
  // Professional SVG icon names
  const icons = ['building', 'chart', 'handshake', 'globe', 'currency', 'scale', 'shopping']
  return icons[index % icons.length]
}
</script>

