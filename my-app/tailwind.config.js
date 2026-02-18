const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/*.{html,ts}'),
    join(__dirname, 'src/content/**/*.md'),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
