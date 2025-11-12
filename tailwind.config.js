/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00A896',
        'primary-hover': '#008c7a',
        'text-primary': '#1A3B5C',
        background: 'white',
        foreground: '#1A3B5C',
        muted: {
          DEFAULT: '#f3f4f6',
          foreground: '#6b7280',
        },
        border: '#e5e7eb',
        card: {
          DEFAULT: 'white',
          foreground: '#1A3B5C',
        },
      },
    },
  },
  plugins: [],
}
