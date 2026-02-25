/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "media",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["system-ui", "ui-sans-serif", "sans-serif"]
      }
    }
  },
  plugins: []
};
