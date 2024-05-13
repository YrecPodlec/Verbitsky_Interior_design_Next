import type { Config } from "tailwindcss";

// @ts-ignore
const config: Config = {
  content: [
    "./(pages)/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        orange: "#FF3D00",
        back: "#1E1E1E",
        green: "#00723B",
        blackOpacity: "rgba(0,0,0,0.6)",
      },
      fontSize: {
        px4: "4px",
        px8: "8px",
        px12: "12px",
        px16: "16px",
        px24: "24px",
        px32: "32px",
        px48: "48px",
        px64: "64px",
        px80: "80px",
        px96: "96px",
        px128: "128px",
      },
      padding: {
        screen320: '320px',
        screen160: '160px'
      },
      screens: {
        screen_1600: {'max': '1600px'},
        screen_1280: {'max': '1280px'},
        screen_960: {'max': '960px'},
        screen_640: {'max': '640px'},
        screen_320: {'max': '320px'},
      },
      boxShadow:{
        shadow_Navbar: '400px 0 0 0 rgba(0, 0, 0, 0.7);',
        shadow_none: '1px 0 0 0 rgba(0, 0, 0, 0.1);',
      }
    },
  },
  plugins: [],
};
export default config;
