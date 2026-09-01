/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050B14',
          900: '#07111F', // Primary bg
          850: '#0A1726',
          800: '#0D1B2A', // Secondary bg
          750: '#0F2236',
          700: '#111F30', // Card bg
          600: '#16283D',
          500: '#1E3A5F',
        },
        slate: {
          850: '#15202E',
          750: '#1E2C3F',
        },
        emerald: {
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
        },
        accent: {
          green: '#22C55E',
          emerald: '#10B981',
          blue: '#3B82F6',
          cyan: '#06B6D4',
          indigo: '#6366F1',
        },
        text: {
          primary: '#F8FAFC',
          secondary: '#94A3B8',
          muted: '#64748B',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glass-glow': '0 0 25px -5px rgba(34, 197, 94, 0.15)',
        'blue-glow': '0 0 25px -5px rgba(59, 130, 246, 0.2)',
        'card': '0 10px 30px -10px rgba(0,0,0,0.5)',
        'card-hover': '0 20px 40px -15px rgba(0,0,0,0.7), 0 0 20px 0 rgba(16, 185, 129, 0.15)',
        'executive': '0 25px 50px -12px rgba(7, 17, 31, 0.9)',
      },
      borderColor: {
        'executive': 'rgba(255, 255, 255, 0.08)',
        'executive-hover': 'rgba(34, 197, 94, 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'mesh-pattern': 'radial-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px)',
      },
      keyframes: {
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'shimmer': {
          '100%': { transform: 'translateX(100%)' },
        }
      },
      animation: {
        'pulse-subtle': 'pulse-subtle 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
