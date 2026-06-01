/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-up': {
          '0%': { opacity: 0, transform: 'translateY(40px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'slide-in-down': {
          '0%': { opacity: 0, transform: 'translateY(-40px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(30px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(.4,0,.2,1) forwards',
        'slide-in-down': 'slide-in-down 1s cubic-bezier(.4,0,.2,1) forwards',
        float: 'float 8s ease-in-out infinite',
        'float-slow': 'float-slow 14s ease-in-out infinite',
      },
    },
  },
    plugins: [],
  }