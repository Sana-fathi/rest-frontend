/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
   
    extend: {
      colors: {
        'tbRed': '#EB8E78',
        // 'purple': '#7e5bef',
        // 'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#198754',
        'yellow': '#ffc82c',
        // 'gray-dark': '#273444',
        // 'gray': '#8492a6',
        // 'gray-light': '#d3dce6',
        'black':'#333',
        'white' : '#fff',
        'gray-dim':'#eeeeee'
      },
      fontFamily: {
        'worksans': ['Work Sans', 'sans-serif'],
        'dmsans': ['DM Sans', 'sans-serif'],
        'caveat' : ['Caveat', 'cursive'],
        'ubuntu' : ['Ubuntu', 'sans-serif']
      },
      transitionProperty: {
        'left': 'left',
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
    // require('tailwind-scrollbar'),
  ]
};
