/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'inner-custom': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
        'custom-rgba': '0 2px 4px 0 rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}