module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        "layout-color": "#1a1a24",
        "blue-mid":"#22222f",
        "card-color":"#292831"
      },
      fontFamily:{
        'helvethaica':['HELVETHAICA','san-serif']
      }
    },
  },
  plugins: [],
};
