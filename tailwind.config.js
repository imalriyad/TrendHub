/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#42AD67",
        graycolor: "#605D5D",
        desColor: "#D1F0DC",
      },
    },
  },
  plugins: [require("daisyui")],
};
