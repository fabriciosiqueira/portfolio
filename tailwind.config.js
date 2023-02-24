/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  
  content: [
    "./src/**/*.{html,ts,js,jsx,tsx}",
    "./pages/**/*.{html,ts,js,jsx,tsx}",
    "./components/**/*.{html,ts,js,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    fontFamily: {
      poppins: ['Poppins'],
    },
    colors: {
      primary:"#601b56",
      secundary:"#70078e",
      infoText:"#2c2c2c",
      title:"#710391",
      subTitle:"#707070",
      shape:"#FFFFFF",
      dark:"#000000"
    },
    extend: {
      fontFamily: {
        'poppins': ['Poppins']
      },
      backgroundImage: {
        //'fundo': "url('/bg.svg')",
      }
    },
    screens: {
      phone: { min: "320px", max: "600px" },

      tablet: { min: "640px", max: "1023px" },

      laptop: "1024px",

      desktop: "1280px",
      ultraWide: { min: "1281px", max: "2560px" },

      ...defaultTheme.screens,
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
}
