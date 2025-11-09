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
          yellow: '#FAEF35',
          orange: '#FF6B35',
        },
        accent: {
          pink: '#FF5E5E',
          blue: '#607AFF',
          green: '#3ADC49',
          purple: '#CA5DFF',
        }
      },
      animation: {
        'bounce-slow': 'bounce 1s cubic-bezier(0.04, 0.35, 0, 1) infinite',
        'fade-in': 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bounce: {
          '0%, 75%, 100%': { transform: 'translateY(0px)' },
          '25%': { transform: 'translateY(-30px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
