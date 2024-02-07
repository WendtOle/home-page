/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      flexBasis: {
        "5/8": "65.25%",
        "3/8": "37.5%",
      },
    },
  },
  plugins: [],
};
