/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",
  "./src/components/*.{vue,js,ts,jsx,tsx}",
  './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {},
    letterSpacing: {
      '1': '0em',
      '2': '0.025em',
      '3': '0.05em',
      '4': '0.1em',
      '5':  '0.15em',
      '6':  '0.2em',
      '7':  '0.25em',
      '8':  '0.3em',
      '9':  '0.35em',
      '10':  '0.4em',
    }
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
  
}
