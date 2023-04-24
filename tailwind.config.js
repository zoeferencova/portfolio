/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'col': '934px',
        'mob': '484px',
        'viz-col': '550px'
      },
      fontSize: {
        'md': '1.06rem',
        'mob': '0.96rem'
      },
      boxShadow: {
        'custom': 'rgba(15, 15, 15, 0.1) 0px 2px 4px'
      }
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
