import typographyPlugin from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: "18px",
      },
      colors: {
        background: "#1E1E1E",
        primary: "#D0D0D0",
        accent: "#E4FF1A",
        neutral: "#878787",
        prose: "#D6D6D6",
      },
    },
  },
  plugins: [typographyPlugin],
};
export default config;
