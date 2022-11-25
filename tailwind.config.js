/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#d1fae5",
         "secondary": "#36D399",
          "accent": "#1FB2A6",
          "neutral": "#191D24",
          "base-100": "#FFFFFF",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ],
  },
  theme: {
    extend: {},

  },
  plugins: [require("daisyui")],
}
