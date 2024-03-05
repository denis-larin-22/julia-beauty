import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '10px',
        screens: {
          '2xl': '1430px'
        },
      },
      fontSize: {
        't-sm-semibold': ['1em', {
          lineHeight: '150%',
          fontWeight: '600'
        }],
        't-sm-regular': ['1em', {
          lineHeight: '150%',
          fontWeight: '400',
        }],
        't-sm-bold': ['1em', {
          lineHeight: '140%',
          fontWeight: '700'
        }],
        't-md': ['1.2em', {
          lineHeight: '140%',
          fontWeight: '600'
        }],
        't-lg': ['1.4em', {
          lineHeight: '140%',
          fontWeight: '700',
        }],
        't-xl': ['2.2em', {
          lineHeight: '140%',
          fontWeight: '700'
        }],
        't-xxl': ['2.9em', {
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
      maxWidth: {
        't-maxScreen': '1920px',
      }
    },
  },
  plugins: [],
};
export default config;
