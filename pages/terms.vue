<template>
  <div class="min-h-screen bg-white">
    <div class="container mx-auto px-4 py-16">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-serif font-bold text-coffee-bean mb-8">
          {{ $t('footer.terms') }}
        </h1>
        <div class="prose prose-lg max-w-none">
          <p class="text-gray-700 mb-6">
            This terms of service page is under construction. Please check back soon.
          </p>
          <p class="text-gray-700 mb-6">
            For any questions about our terms of service, please contact us at:
          </p>
          <p class="text-gray-700">
            <strong>Email:</strong> {{ $t('contact.email') }}<br>
            <strong>Phone:</strong> {{ $t('contact.phone') }}
          </p>
        </div>
        <div class="mt-12">
          <NuxtLink 
            :to="localePath('/')" 
            class="inline-block bg-copper hover:bg-autumn-ember text-white font-semibold py-3 px-6 rounded transition-colors duration-300"
          >
            ← Back to Home
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>

