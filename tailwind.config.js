/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "letter-box": {
          "in-position": "#6AAA64",
          "in-word": "#CEB02C",
          "not-in-word": "#939B9F",
        },
      },
    },
  },
  plugins: [],
  safelist: ["bg-letter-box-in-position", "bg-letter-box-in-word", "bg-letter-box-not-in-word"],
};