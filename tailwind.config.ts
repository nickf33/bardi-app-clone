import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      desktop_xl: { min: "1280px" },
      // anything over 1280px
      desktop: { max: "1080px" },
      // anything under 1024px
      laptop: { max: "900px" },
      // specific use case - form elements
      tablet: { max: "767px" },
      //anyting under 767px
      mobile_xl: { max: "528px" },
      // For larger mobile Phones
      mobile: { max: "465px" },
      // Anything under 465px
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
