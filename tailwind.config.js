/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "cla-primary": "#8053FF",
        "cla-main-body": "#23155B",
        "cla-light-grey": "#817d8e",
        "cla-white": "#f4f4f4",
        "cla-nav-bg-light": "#E5E7EB",
        "cla-nav-bg-dark": "#23155B",
        "cla-bg-light": "#CBd5E1",
        "cla-bg-dark": "#4322C9A3"
      },
      fontFamily: {
        "martel": ["Martel Sans", "sans-serif"],
        "noto": ["Noto Sans", "sans-serif"]
      },
    },
  },
  plugins: [],
}

