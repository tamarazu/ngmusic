/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#712bda",
        secondary: "#a45deb"
      },
    },
    borderRadius: {
      "large": '20px'
    }
  },
  plugins: [],
};
