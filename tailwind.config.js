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
          "empty": "#DADDDE",
          "dark-empty": "#3C4150",
          "dark-not-in-word": "#818181",
        },
        "keyboard": {
          "in-position": "#6AAA64",
          "in-word": "#CEB02C",
          "not-in-word": "#818181",
          "clean": "#D3D6DA",
          "character": "#56575E",
          "dark-clean": "#565F7E",
        },
        "dark-palette": {
          main: "#262B3C",
          components: "#2B3041"
        }
      },
    },
  },
  plugins: [],
  safelist: [
    "bg-letter-box-in-position",
    "bg-letter-box-in-word",
    "bg-letter-box-not-in-word",
    "bg-letter-box-empty",
    "bg-keyboard-in-position",
    "bg-keyboard-in-word",
    "bg-keyboard-not-in-word",
    "bg-keyboard-clean",
    "bg-keyboard-character",
  ],
};
