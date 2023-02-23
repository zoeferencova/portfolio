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
        'mob': '484px'
      },
      fontSize: {
        'md': '1.06rem'
      }
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
