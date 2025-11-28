import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
      colors: {
        'coffee-bean': '#13070C',
        'copper': '#AF6A36',
        'autumn-ember': '#BE5B17',
        'white': '#FFFFFF',
        'charcoal': '#474350',
      },
    },
  },
  plugins: [],
} satisfies Config
