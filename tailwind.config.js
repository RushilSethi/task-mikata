/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',  //bg-background
        container: 'var(--color-container)',    //bg-container
        primary: 'var(--color-primary)',           //text-primary
        secondary: 'var(--color-secondary)',        //text-secondary
        divider: 'var(--color-divider)',        //border-divider
        highlight: 'var(--color-highlight)',    //bg-highlight/20  (for effects like hover or glass)
      },
    },
  },
  plugins: [],
}

