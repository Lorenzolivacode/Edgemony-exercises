/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      translate: {
        "negative-half": "-50%",
      },
    },
  },
  plugins: [],
};
