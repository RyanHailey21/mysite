/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Matching your existing color scheme
        primary: {
          bg: 'var(--color-bg-primary)',
          DEFAULT: 'var(--color-accent-primary)',
          hover: 'var(--color-accent-secondary)',
        },
        secondary: {
          bg: 'var(--color-bg-secondary)',
          DEFAULT: 'var(--color-accent-muted)',
        },
        tertiary: {
          bg: 'var(--color-bg-tertiary)',
        },
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          muted: 'var(--color-text-muted)',
        },
      },
      fontFamily: {
        sans: 'var(--font-family-main)',
        mono: 'var(--font-family-code)',
      },
      boxShadow: {
        card: '0 4px 6px rgba(0, 0, 0, 0.3)',
        'card-hover': '0 10px 20px rgba(0, 0, 0, 0.4)',
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'var(--color-text-secondary)',
            a: {
              color: 'var(--color-accent-primary)',
              '&:hover': {
                color: 'var(--color-accent-secondary)',
              },
            },
            h1: { color: 'var(--color-text-primary)' },
            h2: { color: 'var(--color-text-primary)' },
            h3: { color: 'var(--color-text-primary)' },
            h4: { color: 'var(--color-text-primary)' },
            h5: { color: 'var(--color-text-primary)' },
            h6: { color: 'var(--color-text-primary)' },
            strong: { color: 'var(--color-text-primary)' },
            code: { color: 'var(--color-text-primary)' },
            blockquote: { color: 'var(--color-text-secondary)' },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

