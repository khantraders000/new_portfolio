/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: '#0A0D13',
        surface: '#10141D',
        surface2: '#151B27',
        line: '#212836',
        ink: '#E9ECF3',
        dim: '#8B93A6',
        violet: '#8B7CFF',
        amber: '#FFB454',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
};
