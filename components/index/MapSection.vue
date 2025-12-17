<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-serif font-bold text-coffee-bean mb-4">
          {{ $t('map.title') }}
        </h2>
        <div class="w-24 h-1 bg-autumn-ember mx-auto rounded-full mb-6"></div>
        <p class="text-lg text-gray-700 max-w-2xl mx-auto">
          {{ $t('map.description') }}
        </p>
      </div>

      <div class="max-w-6xl mx-auto">
        <div class="rounded-xl overflow-hidden shadow-2xl border border-gray-200">
          <!-- Google Maps Embed -->
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.8753842871836!2d-118.10632492425785!3d34.10188571541447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2db7b8f9a8c9d%3A0x5e5e5e5e5e5e5e5e!2s923%20E%20Valley%20Blvd%20STE%20111%2C%20San%20Gabriel%2C%20CA%2091776!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
            width="100%"
            height="450"
            style="border:0;"
            :allowfullscreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="w-full"
          ></iframe>
        </div>

        <!-- Contact Info Cards Below Map -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <!-- Address Card -->
          <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 rounded-full bg-copper/10 flex items-center justify-center">
                  <svg class="w-6 h-6 text-copper" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 class="font-semibold text-coffee-bean mb-2">{{ $t('map.addressTitle') }}</h3>
                <p class="text-sm text-gray-600">{{ $t('contact.address') }}</p>
              </div>
            </div>
          </div>

          <!-- Phone Card -->
          <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 rounded-full bg-copper/10 flex items-center justify-center">
                  <svg class="w-6 h-6 text-copper" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 class="font-semibold text-coffee-bean mb-2">{{ $t('map.phoneTitle') }}</h3>
                <a href="tel:+16262880830" class="text-sm text-gray-600 hover:text-copper transition-colors block">
                  {{ $t('contact.phone') }}
                </a>
                <a href="tel:+16262880831" class="text-sm text-gray-600 hover:text-copper transition-colors block">
                  {{ $t('contact.phone2') }}
                </a>
              </div>
            </div>
          </div>

          <!-- Hours Card -->
          <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 rounded-full bg-copper/10 flex items-center justify-center">
                  <svg class="w-6 h-6 text-copper" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 class="font-semibold text-coffee-bean mb-2">{{ $t('footer.hours') }}</h3>
                <p class="text-sm text-gray-600">{{ $t('footer.openToday') }}</p>
                <p class="text-sm text-gray-600">{{ $t('footer.hoursTime') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Component is purely presentational, no logic needed
</script>

