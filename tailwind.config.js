/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0b',
        surface: '#141417',
        'surface-2': '#1c1c21',
        border: '#27272a',
        muted: '#a1a1aa',
        ink: '#e4e4e7',
        accent: {
          DEFAULT: '#34d399',
          hover: '#6ee7b7',
          dim: '#0f3d2e',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        content: '1100px',
      },
    },
  },
  plugins: [],
};
