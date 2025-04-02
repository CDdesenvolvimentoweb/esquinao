/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        gray: {
          900: '#111827',
          800: '#1f2937',
          700: '#374151',
          600: '#4b5563',
          400: '#9ca3af',
          300: '#d1d5db',
        },
        blue: {
          700: '#1d4ed8',
          600: '#2563eb',
          500: '#3b82f6',
        },
        green: {
          700: '#15803d',
          600: '#16a34a',
        },
        pink: {
          700: '#be185d',
          600: '#db2777',
        },
        purple: {
          700: '#7e22ce',
          600: '#9333ea',
        },
      },
      boxShadow: {
        'glow': '0 0 15px rgba(59, 130, 246, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}

