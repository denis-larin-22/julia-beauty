import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        't-sm-semibold': ['1em', {
          lineHeight: '140%',
          fontWeight: '600'
        }],
        't-sm-regular': ['1em', {
          lineHeight: '140%',
          fontWeight: '400'
        }],
        't-sm-bold': ['1em', {
          lineHeight: '140%',
          fontWeight: '700'
        }],
        't-md': ['1.2em', {
          lineHeight: '140%',
          fontWeight: '600'
        }],
        't-lg': ['1.6em', {
          lineHeight: '140%',
          fontWeight: '600'
        }],
        't-xl': ['2.7em', {
          lineHeight: '140%',
          fontWeight: '600'
        }],
      },
      colors: {
        't-brown-strong': '#744B28',
        't-brown': '#CDA582',
        't-brown-light': '#F1E4D9',
        't-black': '#202020',
        't-gray': '#525252',
        't-pale': '#E9E9E9',
      },
    },
  },
  plugins: [],
};
export default config;
