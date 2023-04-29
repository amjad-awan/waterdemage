/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,css}", "./node_modules/tw-elements/dist/js/**/*.js",  "./node_modules/flowbite/**/*.js"],
  images: {
    domains: ['localhost']
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Quicksand'],
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")]

}