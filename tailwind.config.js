/** @type {import('tailwindcss').Config} */
export default {
  content: ['/index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sunshine: {
          fg: 'rgb(var(--clr-sunshine-foreground) / <alpha-value>)',
          bg: 'rgb(var(--clr-sunshine-background) / <alpha-value>)',
        },
        black: {
          darker: 'rgb(var(--clr-text-dark) / <alpha-value>)',
          lighter: 'rgb(var(--clr-text-lighter) / <alpha-value>)',
        },
      },
    },
  },
  plugins: [],
}
