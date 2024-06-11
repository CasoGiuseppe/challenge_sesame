/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue, js, ts, jsx, tsx}'],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      phone: { max: '36rem' },
      'tablet-pt': '48rem',
      'tablet-ld': '62rem',
      desktop: '75rem',
      'large-desktop': '92.5rem'
    },

    spacing: {
      none: 'var(--spacing-00, 0)',
      xxsm: 'var(--spacing-10, 1rem)', // 2
      xsm: 'var(--spacing-20, 1rem)', // 4
      sm: 'var(--spacing-30, 1rem)', // 8
      xmd: 'var(--spacing-40, 1rem)', // 12
      md: 'var(--spacing-50, 1rem)', // 16
      lg: 'var(--spacing-60, 1rem)', // 24
      xlg: 'var(--spacing-70, 1rem)', // 32
      xxlg: 'var(--spacing-80, 1rem)', // 40
      xxxlg: 'var(--spacing-90, 1rem)' // 64
    },

    colors: {
      logo: {
        600: 'var(--color-logo-600, #000)',
        500: 'var(--color-logo-500, #000)',
        400: 'var(--color-logo-400, #000)',
        100: 'var(--color-logo-100, #000)'
      },
      background: {
        200: 'var(--color-background-200, #000)'
      },
      neutral: {
        300: 'var(--color-neutral-300, #000)',
        100: 'var(--color-neutral-100, #000)'
      },
      default: {
        current: 'currentColor',
        none: 'transparent',
      }
    },
    extend: {},
  },
  plugins: [],
}

