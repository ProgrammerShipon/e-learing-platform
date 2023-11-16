/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        primary: "#30bdec3b 0px 2px 5px -1px, #30bdec3b 0px 1px 3px -1px",
        hover: "0px 2px 8px 0px rgba(94,185,217,0.65)",
      },
      colors: {
        primary: "#30BEEC",
      },
    },
  },
};
