/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        charcoal: "#f8fafc",
        accent: "#00f3ff", // Neon Cyan
        "accent-dim": "rgba(0, 243, 255, 0.15)",
        "accent-glow": "rgba(0, 243, 255, 0.3)",
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: 1, boxShadow: '0 0 20px rgba(0, 243, 255, 0.5)' },
          '50%': { opacity: 0.6, boxShadow: '0 0 10px rgba(0, 243, 255, 0.2)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%)',
      }
    },
  },
  plugins: [],
}
