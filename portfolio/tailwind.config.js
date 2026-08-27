/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rust: {
          50: '#fdf6f5',
          100: '#fbeceb',
          200: '#f7d0cb',
          300: '#f2a89f',
          400: '#ea7868',
          500: '#f26a57',
          600: '#de4935',
          700: '#bb3322',
          800: '#9b2b1e',
          900: '#80271d',
          DEFAULT: '#f26a57',
        },
        slatebg: '#08090c',
        panelbg: '#0e1014',
      },
      animation: {
        scroll: "scroll 15s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s infinite alternate",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-glow": {
          "0%": { boxShadow: "0 0 5px rgba(242, 106, 87, 0.2)" },
          "100%": { boxShadow: "0 0 20px rgba(242, 106, 87, 0.6)" },
        },
      },
    },
  },
  plugins: [],
}