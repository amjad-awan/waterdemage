/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,css}", "./node_modules/tw-elements/dist/js/**/*.js"],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Quicksand'],
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")]

}