/** @type {import('tailwindcss').Config}*/
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { screens:{
      res_menu:{max:"630px"},
      user:{max:"1060px"}
    }},
  },
  plugins: [],
}