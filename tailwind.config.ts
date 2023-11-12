import type { Config } from 'tailwindcss';
import colors, { orange } from 'tailwindcss/colors';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        commissioner: ['var(--font-commissioner)'],
        roboto: ['var(--font-roboto)'],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        emerald: colors.emerald,
        indigo: colors.indigo,
        yellow: colors.yellow,
        stone: colors.stone,
        sky: colors.sky,
        neutral: colors.neutral,
        gray: colors.gray,
        slate: colors.slate,
        lime: colors.lime,
        rose: colors.rose,
        '100': '#FFFFFF',
        '200': '#F5F5F5',
        '300': '#E4E4E4',
        '400': '#C1C4CB',
        '500': '#7C8187',
        '600': '#5A6069',
        '700': '#35393F',
        '800': '#2B2D31',
        '900': '#1D1F22',
        '1000': '#151619',
        orange: '#E46643',
        orangeHover: '#F39765',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
