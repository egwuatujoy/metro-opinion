/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#00000099",
        "light-blue": "#2ea3f2",
        yellow: "#ffcc02",
        "light-green": "#00e28f",
        "deep-green": " #41a784",
        "divider-green": "#4ca75b",
        "footer-color": " #223035",
      },
      borderWidth: {
        2.5: "2.5px",
        3: "3px",
        3.5: "3.5px",
      },
      transitionDuration: {
        4000: "10,000s",
      },

      fontSize: {
        "4.5xl": ["2.5rem", { lineHeight: "2.5rem" }],
      },
      maxHeight: ({ theme }) => ({
        ...theme("spacing"),
        minis: "80vh",
      }),
    },
  },
  plugins: [],
};
