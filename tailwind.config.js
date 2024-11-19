/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        'max-736': { 'max': '768px' },
        'max-620': { 'max': '620px' },
        'max-530': { 'max': '530px' },
        'max-430': { 'max': '430px' },
        'max-390': { 'max': '390px' },
      },
    },
  },
  plugins: [],
}

