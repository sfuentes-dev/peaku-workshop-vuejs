/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    fontFamily: {
      Monserrat: 'Monserrat, sans-serif',
    },
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}
