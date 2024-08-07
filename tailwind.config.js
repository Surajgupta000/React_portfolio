/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#0A192f",
        "seconadry": "#f97316",
        "tertiary": "#009aee"
      },
      fontSize: {
        '1.5xl': '1.375rem', // Add the custom font size between 1xl (1.25rem) and 2xl (1.5rem)
      },
    },
    screens: {
      'lg': {'max': '2023px'},
      // => @media (max-width: 1023px) { ... }

      'sm': {'max': '1000px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],
}
