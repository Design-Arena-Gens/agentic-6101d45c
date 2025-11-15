/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81"
        },
        slate: {
          950: "#0B1120"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        display: ["var(--font-manrope)", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        brand: "0 20px 45px -20px rgba(99, 102, 241, 0.65)"
      },
      backgroundImage: {
        "glow": "radial-gradient(circle at 20% 20%, rgba(99,102,241,0.25), transparent 50%), radial-gradient(circle at 80% 30%, rgba(14,116,144,0.2), transparent 50%)"
      }
    },
  },
  plugins: [],
}
