import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/lib/**/*.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'brand': {
          'purple': '#27143a',
        },
      },
    },
  },
  plugins: [require('flowbite/plugin')],
  safelist: [
    'dark',
  ],
}
export default config
