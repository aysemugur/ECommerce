/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#23856D", // Primary color. koyu yesil
        secondary: "#47AD97", // Secondary color. Su yesili acik
        top: "#17213C", // Third color. Lacivert
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        h1: ["64px", { fontWeight: "700" }],
        h2: ["44px", { fontWeight: "700" }],
        h3: ["21px", { fontWeight: "400" }],
        h4: ["20px", { fontWeight: "700" }],
        h5: ["19px", { fontWeight: "700" }],
        h6: ["14px", { fontWeight: "600" }],
        buttonText: ["16px", { fontWeight: "600" }],
        mobileMenu: ["30px", { fontWeight: "500" }],
        paragraph: ["16px", { fontWeight: "400" }],
        list: ["20px", { fontWeight: "400" }],
        link: ["16px", { fontWeight: "500" }],
      },
    },
  },
  plugins: [],
};
