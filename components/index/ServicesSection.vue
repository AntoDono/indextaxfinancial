<template>
  <!-- Services Section -->
  <section id="services" class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-serif font-bold text-coffee-bean mb-4">{{ $t('services.title') }}</h2>
        <div class="w-24 h-1 bg-autumn-ember mx-auto rounded-full"></div>
      </div>

      <div class="max-w-6xl mx-auto relative">
        <IndexServicesCarousel />
      </div>
    </div>
  </section>
</template>

