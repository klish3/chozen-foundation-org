module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  plugins: [
    require('daisyui'),
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },

  daisyui: {
    themes: [
      'light', // first one will be the default theme
    ],
  },
}
