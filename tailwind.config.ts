import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm_xl: "1200px",
        xl: "1280px",
        xxl: "1440px",
      },
      keyframes: {
        float: {
          "0%": { transform: "translateY(0) scale(0.8)" },
          "50%": { transform: "translateY(50vh) scale(1.2)" },
          "100%": { transform: "translateY(-10vh) scale(0.8)" },
        },
      },
      animation: {
        float: "float 10s linear infinite",
      },
      lineHeight: {
        "12": "60px",
        "11": "52px",
      },
      skew: {
        "-30": "-30deg",
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        commissioner: ["Commissioner", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        "bai-jamjuree": ["Bai Jamjuree", "sans-serif"],
      },
      colors: {
        customLightPink: "#c1acf6",
        customPurple: "#5b0292",
        customLightBlue: "#30d8ff",
        customWhite: "#FFFFFFBA",
        customPink: "#DF1FDD",
        customPink2: "#A32CC4",
        customPinkPurple: "#C243FE",
        customGray: "#4b4b4b",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      rotate: {
        "15": "15deg",
        "30": "30deg",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      const newUtilities = {
        ".scrollbar-hide": {
          "scrollbar-width": "none" /* Firefox */,
          "-ms-overflow-style": "none" /* Internet Explorer 10+ */,
          "&::-webkit-scrollbar": {
            display: "none" /* Safari and Chrome */,
          },
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
export default config;
