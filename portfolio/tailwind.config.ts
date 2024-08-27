import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        secondary: "#00BFFF",
        dark8g: "131424",

      },
      backgroundImage: {
        'gradient-cover': 'linear-gradient(90deg, rgba(255, 105, 180, 0.3) 0%, rgba(0, 191, 255, 0.3) 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
