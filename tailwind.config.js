/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#061417",
        card: "#0A1C20",
        line: "rgba(207, 250, 255, 0.08)",
        mint: "#1ED760",
        ice: "#CFFAFF",
        muted: "rgba(255, 255, 255, 0.6)",
      },
      fontFamily: {
        pop: ["Poppins", "sans-serif"],
        clash: ["clash", "sans-serif"],
        clashbold: ["clashBold", "sans-serif"],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Consolas",
          "monospace",
        ],
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1220px",
        xxl: "1400px",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(30, 215, 96, 0.35), 0 20px 60px -20px rgba(30, 215, 96, 0.35)",
        card: "0 1px 0 0 rgba(207, 250, 255, 0.06) inset, 0 20px 50px -30px rgba(0, 0, 0, 0.8)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        ping2: {
          "75%, 100%": { transform: "scale(2.2)", opacity: "0" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        ping2: "ping2 1.8s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
    },
  },
  plugins: [],
};
