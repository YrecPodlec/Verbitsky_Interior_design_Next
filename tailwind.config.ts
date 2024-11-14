import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
  theme: {
    extend: {
      letterSpacing: {
        widest: '.9em',
        biggest: '16px'
      },
      fontFamily: {
        primary: 'verbitsky',
        secondary: 'voguer'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
            "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'gradient-Title': 'linear-gradient(0deg, rgba(148,22,255,0.35) 0%, rgba(253,187,45,0) 100%)',
      },
      colors: {
        orange: "#FF3D00",
        back: "#1E1E1E",
        back2: "#252525",
        green: "#00723B",
        blackOpacity: "rgba(0,0,0,0.6)",
        greenMainDark: "#00723B",
        greenMainDark_opacity: "rgba(0,114,59,0.5)",
        GreenLight: "#008916",
        OrangeMain: "#EC1100",
        OrangePeach: "#D93C19",
        Yellow: "#F9E000",
        BlueDark: "#090685",
        BlueLight: "#0038FF",
        PurpleDark: "#900045",
        PurpleDark_opacity: "rgba(144,0,69,0.7)",
        PurpleLight: "#750D8F",
        PurpleLight_opacity: "rgba(117,13,143,0.8)",
        PurpleLight2: "rgb(148,22,255)",
      },
      fontSize: {
        4: "4px",
        8: "8px",
        12: "12px",
        16: "16px",
        24: "24px",
        32: "32px",
        48: "48px",
        64: "64px",
        80: "80px",
        96: "96px",
        128: "128px",
        160: "160px",
        256: "256px",
        512: "512px"
      },
      padding: {
        screen320: '320px',
        screen160: '160px'
      },
      screens: {
        '2xl': {'max': '2560px'},
        'xl': {'max': '1920px'},
        'l': {'max': '1670px'},
        'm': {'max': '1460px'},
        's': {'max': '1280px'},
        'xs': {'max': '1030px'},
        'xxs': {'max': '960px'},
        'xxxs': {'max': '640px'},
        'xxxxs': {'max': '380px'},
        'xxxxxs': {'max': '340px'},

        '2xl-min': {'min': '2560px'},
      },
      borderRadius: {
        'main': '32px',
        'mobile': '12px'
      },
      boxShadow: {
        shadow_Navbar: '400px 0 0 0 rgba(0, 0, 0, 0.7);',
        shadow_none: '1px 0 0 0 rgba(0, 0, 0, 0.1);',
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fill, minmax(250px, 1fr))',
        'masonry': 'repeat(auto-fill, minmax(200px, 1fr))'
      },
      gridAutoRows: {
        'auto-row': '10px'
      },
      gridRowEnd: {
        'end30': "span 30"
      },

    },
  },
};
export default config;
