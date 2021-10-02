module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'body': ['Montserrat', 'sans-serif']
      },
      colors: {
        'nav': '#64c9f3',
        'navbar': '#fde8d3',
        'selected': '#1e6d94',
        red: {
          'q': '#ED6356',
          'bgq': '#F99A94'
        },
        yellow: {
          'q': '#FDE9D4',
          'q2': '#F5D152',
          'q3': '#FDE9D4'
        },
        green: {
          'q': '#52AC54',
          'q2': '#265653'
        },
        purple: {
          'q': "#111E54",
          'q2': '#6F5BBA'
        },
        brown: {
          'q': '#F3A261'
        }
      },
      backgroundImage: theme => ({
        'screen-pattern': "url('/src/unpad_asset/bg.png')",
       }),
       scale: {
        'flip': '-1',
        '115': '1.15'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
