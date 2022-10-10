/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'bloom-gray': '#373e3d',
        'bloom-sage': '#b9c1a6',
        'bloom-olive': '#898e59'
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
