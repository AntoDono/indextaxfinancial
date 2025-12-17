<template>
  <IndexImageTextSection
    :title="$t('whyChooseUs.title')"
    :subtitle="$t('whyChooseUs.subtitle')"
    :description="$t('whyChooseUs.desc')"
    :features="reasonsPart1"
    image-src="./images/presentation.jpeg"
    image-alt="Why choose our services"
    :image-left="true"
    bg-color="bg-white"
  />
</template>

<script setup lang="ts">
const { t } = useI18n()

const reasonsPart1 = computed(() => [
  {
    title: t('whyChooseUs.reasons.expertise.title'),
    desc: t('whyChooseUs.reasons.expertise.desc')
  },
  {
    title: t('whyChooseUs.reasons.comprehensive.title'),
    desc: t('whyChooseUs.reasons.comprehensive.desc')
  },
  {
    title: t('whyChooseUs.reasons.local.title'),
    desc: t('whyChooseUs.reasons.local.desc')
  }
])
</script>

