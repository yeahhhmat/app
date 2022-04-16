module.exports = {
  darkMode: "class",
  content: [
    "./components/**/*.{jsx,js}",
    "./pages/*.{jsx,js}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
