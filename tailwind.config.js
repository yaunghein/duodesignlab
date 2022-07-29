/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Satoshi', '-apple-system', 'sans-serif'],
    },
    extend: {
      colors: {
        ddl_brand: '#124734',
        ddl_brand_light: '#CEDFD7',
        ddl_offwhite: '#E5E1E6',
        ddl_dark: '#121013',
      },
    },
  },
  plugins: [],
}
