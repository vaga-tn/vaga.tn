const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/*.{html,ts}'),
    join(__dirname, 'src/content/**/*.md'),
  ],
  theme: {
    extend: {
      colors: {
        customBackgrond: "#111111",
        customBackground2: "#FFFEFE",
        customBackground3: "#FBFAFB",
        customBackground4: "#F1F0F0",
        customText: "#707170",
        customText2: "#EBEBEA",
        customBorder: "#DEDEDF"
      },
    },
  },
  plugins: [],
};
