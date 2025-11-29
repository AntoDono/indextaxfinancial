<template>
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
</template>

