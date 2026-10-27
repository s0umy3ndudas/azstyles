/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#0a0a0b',
          800: '#101012',
          700: '#161618',
          600: '#1d1d20',
        },
        ivory: {
          50: '#fbf9f4',
          100: '#f5f1e8',
          200: '#ece5d4',
          300: '#dcd2b8',
        },
        champagne: {
          400: '#e6cf9c',
          500: '#d4b87a',
          600: '#bf9f5e',
          700: '#a8874a',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'luxury': '0.28em',
        'luxury-sm': '0.18em',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.97)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 1.1s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 1.6s ease both',
        'scale-in': 'scale-in 1.2s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
};
