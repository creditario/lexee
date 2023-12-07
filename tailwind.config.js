const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{liquid,md,html,yml,erb}", "./frontend/javascript/**/*.js", "./data/**/*.yml"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        righteous: ['Righteous', ...defaultTheme.fontFamily.sans],
        unbounded: ['Unbounded', ...defaultTheme.fontFamily.sans],
      },
      textColor: {
        skin: {
          base: 'rgb(var(--color-base) / <alpha-value>)',
          muted: 'rgb(var(--color-muted) / <alpha-value>)',
          dimmed: 'rgb(var(--color-dimmed) / <alpha-value>)',
          accented: 'rgb(var(--color-accented) / <alpha-value>)',
          alternate: 'rgb(var(--color-alternate) / <alpha-value>)',
          'alternate-1': 'rgb(var(--color-alternate-1) / <alpha-value>)',
          inverted: 'rgb(var(--color-inverted) / <alpha-value>)',
        },
      },
      backgroundColor: {
        skin: {
          inverted: 'rgb(var(--color-inverted) / <alpha-value>)',
          accented: 'rgb(var(--color-accented) / <alpha-value>)',
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

