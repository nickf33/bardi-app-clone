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
      // anything under 1080px
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
      fontSize: {
        "2xs": "0.6rem",
      },
      colors: {
        cyan: { logo: "#00C2C8" },
      },
    },
    maxWidth: {
      custom: "1080px",
    },
  },
  plugins: [],
};
export default config;
