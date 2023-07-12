/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ungu: "#F993FF",
        biru: "#93FFF9 ",
        kuning: "#FFF993",
        ungutext: "#EB16FF",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        serif: ["Merriweather", "serif"],
        intr: ["inter", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
