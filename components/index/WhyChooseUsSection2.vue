<template>
  <IndexImageTextSection
    :title="$t('whyChooseUs.title2')"
    :subtitle="$t('whyChooseUs.subtitle2')"
    :description="$t('whyChooseUs.desc2')"
    :features="reasonsPart2"
    image-src="./images/yapping.jpeg"
    image-alt="Strategic partnership and customized services"
    :image-left="false"
    bg-color="bg-gray-50"
  />
</template>

<script setup lang="ts">
const { t } = useI18n()

const reasonsPart2 = computed(() => [
  {
    title: t('whyChooseUs.reasons.customized.title'),
    desc: t('whyChooseUs.reasons.customized.desc')
  },
  {
    title: t('whyChooseUs.reasons.partnership.title'),
    desc: t('whyChooseUs.reasons.partnership.desc')
  }
])
</script>

