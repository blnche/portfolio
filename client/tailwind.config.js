/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('daisyui'),
  ],
  daisyui: {
    themes: ['light', 'dark', {
      cupcake: {
        ...require('daisyui/src/theming/themes') ['cupcake'],
          "--rounded-btn": "0.5rem",
      }
    }, 'synthwave']
  }
}