/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      colors: {
        'colours-background-body': '#f4f4f4',
        'colours-background-panel': '#fff',
        'colours-gray-200': '#e5e7eb',
        'colours-text-light-primary': '#212529',
        'colours-gray-300': '#d1d5db',
        'colours-secondary-800': '#901e75',
        'colours-text-light-secondary': '#83858b',
        'colours-secondary-700': '#b33086',
        gainsboro: '#d9d9d9',
        paleturquoise: '#b2eecf',
        'colours-primary-900': '#165a60',
        'colours-secondary-100': '#fedfe1',
      },
      spacing: {},
      fontFamily: {
        'text-body-1': "'Nunito Sans'",
      },
      borderRadius: {
        '2xs': '11px',
      },
    },
    fontSize: {
      sm: '14px',
      base: '16px',
      '4xs': '9px',
      xs: '12px',
      '3xl': '22px',
      '9xl': '28px',
      inherit: 'inherit',
    },
  },
  plugins: [require('tailwindcss-animate')],
};
