/** @type {import('tailwindcss').Config} */
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
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
