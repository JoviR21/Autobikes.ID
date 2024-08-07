import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2B2E33",
        secondary: "#34373E",
        third: "#F05454",
        fourth: "#242424",
        text: "#FFF",
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
        cousine: ["Cousine", "monospace"],
        montserrat: ["Montserrat", "sans-serif"],
        overpass: ["Overpass", "sans-serif"],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
export default config;
