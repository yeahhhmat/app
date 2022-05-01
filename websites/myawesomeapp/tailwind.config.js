module.exports = {
  darkMode: "class",
  content: [
    "./components/**/*.{jsx,js}",
    "./components/**/**/*.{jsx,js}",
    "./pages/*.{jsx,js}",
    "./pagetemplates/**/*.{jsx,js}",
    "./pagetemplates/**/**/*.{jsx,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
