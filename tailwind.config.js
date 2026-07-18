/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        display: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', '"SF Mono"', 'Menlo', 'Consolas', 'monospace'],
      },
      colors: {
        accent: {
          50: '#fdf3f0',
          100: '#fce4dc',
          200: '#f8cdbd',
          300: '#f3ae94',
          400: '#ec8764',
          500: '#e56942',
          600: '#d4552e',
          700: '#b14324',
          800: '#933b22',
          900: '#7a3420',
          950: '#42180e',
        },
      },
    },
  },
  plugins: [],
}
