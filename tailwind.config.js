/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: '#7bc144',
        purple: '#7c4199',
        blue: '#0984e2',
      },
      fontFamily: {
        mochiy: ['Mochiy Pop One', 'sans-serif'],
        oxanium: ['Oxanium', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        Mulish:['Mulish','sans-serif']
      },
    },
  },
  plugins: [],
}
