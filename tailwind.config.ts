import type { Config } from 'tailwindcss'

export default {
  content: [  './src/**/*.js',
  './src/**/*.jsx',
  './src/**/*.ts',
  './src/**/*.tsx',],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1e40af",
          hover: "#3b82f6",
          foreground: "white"
        },
        secondary: {
          DEFAULT: "#e2e8f0",
          hover: "#64748b",
          foreground: "black"
        },
      }
    },
  },
  plugins: [],
} satisfies Config

