module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
    require('flowbite/plugin')
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
      'light',
    ],
  },
}
