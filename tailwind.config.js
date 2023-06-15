/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/renderer/**/*.{js,jsx,ts,tsx,ejs}'],
  theme: {
    extend: {
      colors: {
        'custom-red': 'rgb(221, 87, 137)',
        'custom-purple': 'rgb(122, 44, 158)',
        'custom-yellow': 'rgb(254, 220, 42)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
