/** @type {import('tailwindcss').Config} */
import tailwindTypography from "@tailwindcss/typography";
export default {
  content: ["./pages/**/*.vue", "./components/**/*.vue"],
  theme: {
    extend: {
      colors: {
        purple: "#240E43",
      },
    },
  },
  plugins: [tailwindTypography],
};
