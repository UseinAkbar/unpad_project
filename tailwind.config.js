module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'nav': '#64c9f3',
        'navbar': '#fde8d3',
        'selected': '#1e6d94'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
