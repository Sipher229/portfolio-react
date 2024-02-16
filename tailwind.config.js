/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'xs':'300px',

      
      'sm': '600px',


      'md': '900px',


      'lg': '1200px',


      'xl': '1350px',
     

      '2xl': '1536px',
    },
    extend: {},
  },
  plugins: [],
}

