module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'new-me-400': '#676767',
        'button-color': '#FF5C00',
        'thanks-color': '#FFF8F5',
        'vasiti-gray': '#514D4A',
        'light-blue': '#EEF8FF',
        'v-color': '#E5E5E5',
        'vas-color': '#494949'
      },
      width: {
        527: '527px',
        335: '335px',
      },
      height: {
        480: '632px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
