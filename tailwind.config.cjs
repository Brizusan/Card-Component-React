/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
      'laptop': '1120px'
    },
    fontFamily: {
      'fraunces': ['Fraunces', 'sans-serif'],
      'monserrat': ['Monserrat', 'sans-serif'] // Ensure fonts with spaces have " " surrounding it.
    },
    colors : {
      darkcyan:'#3c8067',
      cream:'#f2ebe3',
      verydarkblue:'#1c232b',
      darkgrayblue:'#6c7289',
      white:'#fff'
      
    }
  },
  plugins: [],
}
