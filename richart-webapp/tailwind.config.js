module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      outline: ['hover', 'active'],
      ringWidth: ['hover', 'active'],
      ringColor: ['hover', 'focus'],
      borderColor: ['active']
    },
  },
  plugins: [],
}
