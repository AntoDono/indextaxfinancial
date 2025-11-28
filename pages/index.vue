<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative bg-coffee-bean text-white py-32 overflow-hidden">
      <div class="absolute inset-0 z-0 opacity-30">
         <!-- Placeholder for Hero Background Image -->
        <img src="https://placehold.co/1920x1080/13070C/AF6A36?text=Financial+Success+Background" alt="Office Skyscraper Low Angle" class="w-full h-full object-cover" />
      </div>
      <div class="container mx-auto px-4 relative z-10 text-center">
        <h1 class="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight">
          {{ $t('hero.title') }}
        </h1>
        <p class="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
          {{ $t('hero.subtitle') }}
        </p>
        <NuxtLink 
          to="#contact" 
          class="inline-block bg-autumn-ember hover:bg-copper text-white font-bold py-3 px-8 rounded transition-colors duration-300 shadow-lg"
        >
          {{ $t('hero.cta') }}
        </NuxtLink>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center gap-12">
          <div class="md:w-1/2">
             <!-- Placeholder for About Image -->
            <img src="https://placehold.co/800x600/AF6A36/FFFFFF?text=Professional+Team" alt="Team meeting in a conference room" class="rounded-lg shadow-xl w-full h-auto" />
          </div>
          <div class="md:w-1/2">
            <h2 class="text-4xl font-serif font-bold text-coffee-bean mb-6 relative inline-block">
              {{ $t('about.title') }}
              <span class="absolute bottom-0 left-0 w-1/2 h-1 bg-autumn-ember rounded-full"></span>
            </h2>
            <p class="text-lg text-gray-700 leading-relaxed">
              {{ $t('about.desc') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-serif font-bold text-coffee-bean mb-4">{{ $t('services.title') }}</h2>
          <div class="w-24 h-1 bg-autumn-ember mx-auto rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Tax Service -->
          <div class="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-coffee-bean group">
            <div class="w-16 h-16 bg-coffee-bean/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-coffee-bean group-hover:text-white transition-colors">
              <!-- Icon Placeholder -->
              <span class="text-3xl">📄</span>
            </div>
            <h3 class="text-2xl font-serif font-bold text-coffee-bean mb-4">{{ $t('services.tax.title') }}</h3>
            <p class="text-gray-600">{{ $t('services.tax.desc') }}</p>
          </div>

          <!-- Financial Planning -->
          <div class="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-autumn-ember group">
            <div class="w-16 h-16 bg-autumn-ember/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-autumn-ember group-hover:text-white transition-colors">
              <span class="text-3xl">📈</span>
            </div>
            <h3 class="text-2xl font-serif font-bold text-coffee-bean mb-4">{{ $t('services.planning.title') }}</h3>
            <p class="text-gray-600">{{ $t('services.planning.desc') }}</p>
          </div>

          <!-- Bookkeeping -->
          <div class="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-copper group">
            <div class="w-16 h-16 bg-copper/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-copper group-hover:text-white transition-colors">
              <span class="text-3xl">📒</span>
            </div>
            <h3 class="text-2xl font-serif font-bold text-coffee-bean mb-4">{{ $t('services.bookkeeping.title') }}</h3>
            <p class="text-gray-600">{{ $t('services.bookkeeping.desc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-coffee-bean text-white relative">
      <div class="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
         <!-- Decorative background element -->
         <div class="absolute -top-24 -right-24 w-96 h-96 bg-autumn-ember rounded-full blur-3xl"></div>
         <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-copper rounded-full blur-3xl"></div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="flex flex-col md:flex-row gap-16">
          <div class="md:w-1/2">
            <h2 class="text-4xl font-serif font-bold mb-8">{{ $t('contact.title') }}</h2>
            
            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <span class="text-autumn-ember text-xl mt-1">📍</span>
                <div>
                  <p class="text-gray-400 text-sm uppercase tracking-wider mb-1">Address</p>
                  <p class="text-lg">{{ $t('contact.address') }}</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <span class="text-autumn-ember text-xl mt-1">📞</span>
                <div>
                  <p class="text-gray-400 text-sm uppercase tracking-wider mb-1">Phone</p>
                  <p class="text-lg">{{ $t('contact.phone') }}</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <span class="text-autumn-ember text-xl mt-1">✉️</span>
                <div>
                  <p class="text-gray-400 text-sm uppercase tracking-wider mb-1">Email</p>
                  <p class="text-lg">info@index111.com</p>
                </div>
              </div>
            </div>
          </div>

          <div class="md:w-1/2 bg-white rounded-lg p-8 text-charcoal shadow-2xl">
            <form class="space-y-6">
              <div>
                <label class="block text-sm font-bold mb-2 text-coffee-bean">{{ $t('contact.form.name') }}</label>
                <input type="text" class="w-full px-4 py-3 rounded border border-gray-300 focus:border-autumn-ember focus:ring-1 focus:ring-autumn-ember outline-none transition-colors" placeholder="" />
              </div>
              <div>
                <label class="block text-sm font-bold mb-2 text-coffee-bean">{{ $t('contact.form.email') }}</label>
                <input type="email" class="w-full px-4 py-3 rounded border border-gray-300 focus:border-autumn-ember focus:ring-1 focus:ring-autumn-ember outline-none transition-colors" placeholder="" />
              </div>
              <div>
                <label class="block text-sm font-bold mb-2 text-coffee-bean">{{ $t('contact.form.message') }}</label>
                <textarea rows="4" class="w-full px-4 py-3 rounded border border-gray-300 focus:border-autumn-ember focus:ring-1 focus:ring-autumn-ember outline-none transition-colors" placeholder=""></textarea>
              </div>
              <button type="submit" class="w-full bg-autumn-ember hover:bg-copper text-white font-bold py-3 rounded transition-colors duration-300">
                {{ $t('contact.form.send') }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

