import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          darkest: '#0f1e3a',
          dark: '#1e3a5f',
          DEFAULT: '#1e40af',
          light: '#3b82f6',
          lighter: '#60a5fa',
        },
        accent: {
          DEFAULT: '#06b6d4',
          light: '#22d3ee',
        },
        secondary: {
          darkest: '#1f2937',
          dark: '#374151',
          DEFAULT: '#6b7280',
          light: '#9ca3af',
          lighter: '#e5e7eb',
        },
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'glow': '0 0 20px rgba(30, 64, 175, 0.3)',
        'glow-lg': '0 0 30px rgba(30, 64, 175, 0.4)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0f1e3a 0%, #1e40af 50%, #3b82f6 100%)',
        'gradient-hero': 'linear-gradient(135deg, #0f1e3a 0%, #1e3a5f 25%, #1e40af 50%, #3b82f6 75%, #60a5fa 100%)',
        'gradient-button': 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
        'gradient-card': 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
}
export default config

