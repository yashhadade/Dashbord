/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        'max-736': { 'max': '768px' },
        'max-600': { 'max': '600px' },
        'max-480': { 'max': '480px' },
        'max-360': { 'max': '360px' },
        'max-320': { 'max': '320px' },
      },
    },
  },
  plugins: [],
}

