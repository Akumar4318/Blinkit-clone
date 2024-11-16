/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Doto: ["Doto", "sans-sarif"],
      },
      colors: {
        lightgreen: "#90EE90",
        lighterwhite:"#FCFCFC",
        darkgreen:"#0c831f",
        ligtgray1:"#F8F8F8",
        lightblue:"#EDF4FE",
        thingreen:"#F6FEF9"
      },
    },
  },
  plugins: [],
};
