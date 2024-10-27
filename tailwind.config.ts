import type { Config } from "tailwindcss";

const config: Config = {
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
        'main':'#ffffff',
        'secondary':'	#5066c6',
        'airport1': "url('/public/airport1.jpg')",
        'airport2': "url('/public/airport2.jpg')",
        'airport3': "url('/public/airport3.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
