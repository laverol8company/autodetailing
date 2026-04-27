/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#070A0F',
        foreground: '#F8FAFC',
        card: '#111827',
        'card-foreground': '#F8FAFC',
        primary: '#2563EB',
        'primary-hover': '#1D4ED8',
        muted: '#6B7280',
        border: '#E5E7EB',
        success: '#16A34A',
      },
    },
  },
  plugins: [],
}
