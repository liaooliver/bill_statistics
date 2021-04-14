module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 1.5s linear infinite',
      }
    },
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