<template>
  <footer class="bg-charcoal text-white pt-12 pb-6">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <!-- Brand -->
        <div>
          <img src="~/assets/images/logo_text_transparent_white.png" alt="Index Tax & Financial Inc." class="h-10 mb-4" />
          <p class="text-gray-300 text-sm leading-relaxed">
            {{ $t('hero.subtitle') }}
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-xl font-serif mb-4 text-copper">{{ $t('nav.services') }}</h3>
          <ul class="space-y-2 text-sm text-gray-300">
            <li>{{ $t('services.tax.title') }}</li>
            <li>{{ $t('services.planning.title') }}</li>
            <li>{{ $t('services.bookkeeping.title') }}</li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-xl font-serif mb-4 text-copper">{{ $t('contact.title') }}</h3>
          <ul class="space-y-2 text-sm text-gray-300">
            <li>{{ $t('contact.address') }}</li>
            <li>{{ $t('contact.phone') }}</li>
            <li>info@index111.com</li>
          </ul>
        </div>
      </div>
      
      <div class="border-t border-white/10 pt-6 text-center text-xs text-gray-400">
        <p>&copy; {{ new Date().getFullYear() }} Index Tax & Financial Inc. {{ $t('footer.rights') }}</p>
      </div>
    </div>
  </footer>
</template>

