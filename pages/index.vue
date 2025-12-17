<template>
  <div>
    <Loading :show="isLoading" :duration="0.7" />
    
    <IndexHeroSection />
    <IndexFeaturesSection />
    <IndexServicesSection />
    <IndexAboutSection />
    <IndexApproachSection />
    <IndexExpertiseSection />
    <IndexCoreTeamSection />
    <IndexWhyChooseUsSection />
    <IndexWhyChooseUsSection2 />
    <IndexMapSection />
  </div>
</template>

<script setup lang="ts">
const isLoading = ref(true)

onMounted(() => {
  // Hide loading screen after a short delay to ensure content is ready
  setTimeout(() => {
    isLoading.value = false
  }, 1500)
})
</script>

