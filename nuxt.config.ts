// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
  css: ['~/assets/global.css'],
  
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Index Tax & Financial Inc',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: '20+ years of Big 4 expertise in international tax planning and cross-border compliance. Serving 500+ clients with bilingual excellence in English and Chinese.' 
        },
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://indextaxfinancials.com' },
        { property: 'og:title', content: 'Index Tax & Financial Inc - Global Vision, Local Expertise' },
        { 
          property: 'og:description', 
          content: '20+ years of Big 4 expertise in international tax planning and cross-border compliance. Serving 500+ clients with bilingual excellence in English and Chinese.' 
        },
        { property: 'og:image', content: 'https://indextaxfinancials.com/image.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Index Tax & Financial Inc Logo' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://indextaxfinancials.com' },
        { name: 'twitter:title', content: 'Index Tax & Financial Inc - Global Vision, Local Expertise' },
        { 
          name: 'twitter:description', 
          content: '20+ years of Big 4 expertise in international tax planning and cross-border compliance. Serving 500+ clients with bilingual excellence in English and Chinese.' 
        },
        { name: 'twitter:image', content: 'https://indextaxfinancials.com/image.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://indextaxfinancials.com' }
      ]
    }
  },
  
  // @ts-ignore
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', name: 'English', file: 'en.json' },
      { code: 'zh', iso: 'zh-CN', name: '中文', file: 'zh.json' }
    ],
    langDir: 'locales',
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    }
  }
})