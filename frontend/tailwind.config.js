/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': {
          50: '#f2ebf9',
          100: '#e4d7f4',
          200: '#c9b0e8',
          300: '#ae88dd',
          400: '#9361d1',
          500: '#7839c6',
          600: '#602e9e',
          700: '#482277',
          800: '#30174f',
          900: '#180b28',
          950: '#0c0614',
          DEFAULT: '#c2a6e5',
        },
        'background': {
          50: '#eeebfa',
          100: '#ddd6f5',
          200: '#bbadeb',
          300: '#9885e0',
          400: '#765cd6',
          500: '#5433cc',
          600: '#4329a3',
          700: '#321f7a',
          800: '#221452',
          900: '#110a29',
          950: '#080514',
          DEFAULT: '#0a0618',
        },
        'primary': {
          50: '#eee7fe',
          100: '#dccffc',
          200: '#ba9efa',
          300: '#976ef7',
          400: '#743df5',
          500: '#520df2',
          600: '#410ac2',
          700: '#310891',
          800: '#210561',
          900: '#100330',
          950: '#080118',
          DEFAULT: '#8a5cf6',
        },
        'secondary': {
          50: '#efecf9',
          100: '#ded8f3',
          200: '#beb1e7',
          300: '#9d8bda',
          400: '#7d64ce',
          500: '#5c3dc2',
          600: '#4a319b',
          700: '#372574',
          800: '#25184e',
          900: '#120c27',
          950: '#090613',
          DEFAULT: '#5b3dbf',
        },
        'accent': {
          50: '#f1e6fe',
          100: '#e2cdfe',
          200: '#c59bfd',
          300: '#a969fc',
          400: '#8c37fb',
          500: '#6f05fa',
          600: '#5904c8',
          700: '#430396',
          800: '#2c0264',
          900: '#160132',
          950: '#0b0119',
          DEFAULT: '#aa6dfc',
        },
        // its scuffed, ik, but deal with it
        purple: {
          100: '#c2a6e5', // text
          200: '#0a0618', // background
          300: '#8a5cf6', // primary
          400: '#5b3dbf', // secondary
          500: '#aa6dfc', // accent
        }
      },
    },
    fontFamily: {
      jetbrains: ["JetBrains Mono", "serif"],
      work: ["Work Sans", "serif"],
      inter: ["Inter", "serif"],
      poppins: ["Poppins", "serif"],
    },
  },
  plugins: [],
}

