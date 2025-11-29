<script setup lang="ts">
const showLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    showLoading.value = false
  }, 2000) // 3 seconds
})
</script>

<template>
  <div>
    <Loading :show="showLoading" :duration="1" />
    <IndexHeroSection />
    <IndexFeaturesSection />
    <IndexExpertiseSection />
    <IndexServicesSection />
    <IndexApproachSection />
    <IndexAboutSection />
    <IndexContactSection />
  </div>
</template>

