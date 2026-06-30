/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef5ff',
          100: '#d9e8ff',
          200: '#bbd5ff',
          300: '#8cb9ff',
          400: '#5593ff',
          500: '#2e6aff',
          600: '#1a4bff',
          700: '#0070f3',
          800: '#0052cc',
          900: '#003d99',
        },
        surface: {
          DEFAULT: 'var(--color-surface)',
          light: 'var(--color-surface-light)',
          lighter: 'var(--color-surface-lighter)',
          border: 'var(--color-border)',
        },
        text: {
          primary: 'var(--color-text)',
          muted: 'var(--color-text-muted)',
        },
      },
      fontFamily: {
        sans: ['Vazirmatn', 'Inter', 'system-ui', 'sans-serif'],
        vazir: ['Vazirmatn', 'system-ui', 'sans-serif'],
        mono: ['GeistMono', 'Courier New', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-20px)' } },
        glow: { '0%': { boxShadow: '0 0 20px rgba(0,112,243,0.3)' }, '100%': { boxShadow: '0 0 40px rgba(0,112,243,0.6)' } },
      },
    },
  },
  plugins: [],
};
