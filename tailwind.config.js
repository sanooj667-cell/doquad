
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        hero: {
          bg: '#d6e4dc',
          ink: '#056739',
          pill: '#b9debf',
          orb: '#a7cca9',
        },
      },
      keyframes: {
        'fade-down': {
          'from': { opacity: '0', transform: 'translateY(-24px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-up': {
          'from': { opacity: '0', transform: 'translateY(24px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'float-a': {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(14px, -12px)' },
        },
        'float-b': {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(-12px, 10px)' },
        },
        'float-c': {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(8px, 14px)' },
        },
        'pulse-subtle': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.9' },
        },
        'float-mini': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        'bubble-wobble': {
          '0%': { transform: 'scale(1)' },
          '33%': { transform: 'scale(1.15, 0.85)' },
          '66%': { transform: 'scale(0.85, 1.15)' },
          '100%': { transform: 'scale(1.1)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'marquee2': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        'fade-down': 'fade-down 780ms cubic-bezier(0.22, 1, 0.36, 1) 120ms forwards',
        'fade-up': 'fade-up 760ms cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-up-kicker': 'fade-up 720ms cubic-bezier(0.22, 1, 0.36, 1) 220ms forwards',
        'fade-up-title': 'fade-up 760ms cubic-bezier(0.22, 1, 0.36, 1) 330ms forwards',
        'fade-up-subtitle': 'fade-up 760ms cubic-bezier(0.22, 1, 0.36, 1) 450ms forwards',
        'fade-up-button': 'fade-up 760ms cubic-bezier(0.22, 1, 0.36, 1) 580ms forwards',
        'fade-up-footer': 'fade-up 760ms cubic-bezier(0.22, 1, 0.36, 1) 760ms forwards',
        'fade-up-footer-slow': 'fade-up 760ms cubic-bezier(0.22, 1, 0.36, 1) 860ms forwards',
        'fade-up-item': 'fade-up 680ms cubic-bezier(0.22, 1, 0.36, 1) var(--agenda-delay, 460ms) forwards',
        'float-a': 'float-a 14s ease-in-out infinite alternate',
        'float-b': 'float-b 11.5s ease-in-out infinite alternate',
        'float-c': 'float-c 8.2s ease-in-out infinite alternate',
        'float-a-slow': 'float-a 18s ease-in-out infinite alternate',
        'float-a-xl': 'float-a 16s ease-in-out infinite alternate',
        'float-b-med': 'float-b 9.7s ease-in-out infinite alternate',
        'float-b-lg': 'float-b 12s ease-in-out infinite alternate',
        'float-b-xl': 'float-b 13.5s ease-in-out infinite alternate',
        'float-c-med': 'float-c 10.4s ease-in-out infinite alternate',
        'float-c-lg': 'float-c 10.5s ease-in-out infinite alternate',
        'float-a-fast': 'float-a 12.6s ease-in-out infinite alternate',
        'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite',
        'float-mini': 'float-mini 4s ease-in-out infinite',
        'bubble-wobble': 'bubble-wobble 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
        'marquee': 'marquee 30s linear infinite',
        'marquee2': 'marquee2 30s linear infinite',
      },
    },
  },
  plugins: [],
}