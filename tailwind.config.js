/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        josefinSans: ["Quicksand", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
        orbitron: ["Orbitron", "sans-serif"]
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

