/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sub: ['"Jersey 10"', "serif"],
        sub2: ['"Noto Sans Display"', "serif"],
      },
    },
  },
  plugins: [],
};
