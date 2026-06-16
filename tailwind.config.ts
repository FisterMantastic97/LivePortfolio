import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F2EBDA',
        espresso: '#2D1F15',
        walnut: '#8B6F47',
        tangerine: '#E85D3F',
        sunray: '#E5B033',
        soda: '#F2A6A0',
        pool: '#2DA8A8',
      },
      fontFamily: {
        display: ['var(--font-display)', 'cursive'],
        sub: ['var(--font-sub)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
