module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#00adb5',
        secondary: '#393e46',
        offWhite: '#eeeeee',
        offBlack: '#222831',
      },
      fontFamily: {
        fira: ['Fira Code'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
