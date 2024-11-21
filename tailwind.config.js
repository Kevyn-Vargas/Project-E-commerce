/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        josefinSans: ["Quicksand", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
        orbitron: ["Orbitron", "sans-serif"],
      },
    },
    screens: {
      "-sm": { max: "480px" },
      // => @media (max-width: 480px) { ... }

      "md": { min: "1000px" },
      // => @media (max-width: 768px) { ... }

      "-md": { max: "890px" },
      // => @media (max-width: 768px) { ... }

      "-770": { max: "770px" },
      // => @media (max-width: 768px) { ... }

      "-lg": { max: "1024px" },
      // => @media (max-width: 1024px) { ... }

      "-xl": {max: "1280px"},
      // => @media (max-width: 1280px) { ... }

      "-2xl": {max: "1536px"},
      // => @media (max-width: 1536px) { ... }
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
