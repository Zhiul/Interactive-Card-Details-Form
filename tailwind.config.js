/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      "600px": "600px",
      sm: { raw: "(min-width: 640px) " },
      md: { raw: "(min-width: 768px) " },
      lg: { raw: "(min-width: 1024px)" },
      xl: { raw: "(min-width: 1280px)" },
      "2xl": { raw: "(min-width: 1536px)" },
      "3xl": { raw: "(min-width: 1840px)" },
    },
    extend: {},
  },
  plugins: [],
};
