/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
     sm: '480px',
     md: '768px',
     lg: '976px',
     xl: '1440px'
    },
    extend: {
      colors:{
        grey : 'rgb(219, 223, 234)',
        lightGreen : 'hsl(116, 89%, 35%)'
      }
    },
  },
  plugins: [],
}

