/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#712bda",
        secondary: "#a45deb",
        success: "#10b981",
        warning: "#f5b014"
      },
    },
  },
  plugins: [],
};
