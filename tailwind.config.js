/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    colors: {
      'bloom-gray': '#373e3d',
      'stone-50': '#fafaf9',
      'bloom-sage': '#b9c1a6',
      'bloom-olive': '#898e59'
    },
    extend: {},
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
