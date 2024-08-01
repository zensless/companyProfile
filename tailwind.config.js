/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        gray: {
          "100": "rgba(255, 255, 255, 0.28)",
          "200": "rgba(0, 0, 0, 0.7)",
          "300": "rgba(255, 255, 255, 0.1)",
        },
        darkorange: "rgba(255, 155, 38, 0.6)",
        aquamarine: "rgba(63, 255, 220, 0.6)",
        darkslategray: {
          "100": "#333",
          "200": "rgba(51, 51, 51, 0.09)",
        },
        gainsboro: "#e6e6e6",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
      },
      borderRadius: {
        "11xl": "30px",
        "3xs": "10px",
        xl: "20px",
        "8xs": "5px",
      },
    },
    fontSize: {
      xl: "20px",
      base: "16px",
      lg: "18px",
      "16xl": "35px",
      "2xl": "21px",
      "9xl": "28px",
      "21xl": "40px",
      "5xl": "24px",
      "13xl": "32px",
      "6xl": "25px",
      "11xl": "30px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq1000: {
        raw: "screen and (max-width: 1000px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
