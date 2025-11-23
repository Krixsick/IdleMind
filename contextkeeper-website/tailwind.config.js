/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        vscode: {
          bg: "#050505",
          sidebar: "#1e1e1e",
          activity: "#333333",
          blue: "#007acc",
          text: "#d4d4d4",
        },
      },
    },
  },
  plugins: [],
};
