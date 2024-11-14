import type { Config } from "tailwindcss";
import daisyui from "daisyui";
import typographyPlugin from "@tailwindcss/typography";

const config: Config = {
  daisyui: {
    themes: [
      {
        black: {
          ...require("daisyui/src/theming/themes")["black"],
          primary: "#D0D0D0",
          secondary: "#D0D0D0",
          accent: "#E4FF1A",
          neutral: "#878787",
          "base-100": "#1E1E1E",
          info: "#0000ff",
          success: "#00ff00",
          warning: "#ffff00",
          error: "#ff0000",
        },
      },
    ],
  },

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [typographyPlugin, daisyui],
};
export default config;
