/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue, js, ts, jsx, tsx}'],
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

    borderRadius: {
      none: 'var(--radius-00, 0)',
      xsm: 'var(--radius-100, 1rem)', // 4
      sm: 'var(--radius-200, 1rem)', // 8
      md: 'var(--radius-300, 1rem)', // 12
      lg: 'var(--radius-400, 1rem)', // 16
      xlg: 'var(--radius-500, 1rem)', // 24
      full: 'var(--radius-600, 1rem)' // 100%
    },

    boxShadow: {
      dark: '0 10px 8px -2px hsla(224, 45%, 22%, .3)',
      light: '0 4px 4px 0 hsla(224, 45%, 22%, .3)',
      focus:  '0 0 0 2px var(--color-neutral-100, #000), 0 0 0 4px var(--color-logo-400, #000);',
      hover:  '0 0 0 1px var(--color-logo-400, #000);',
      invalid: '0 0 0 1px var(--color-warning-100);',
      valid: '0 0 0 1px var(--color-success-100);'
    },

    colors: {
      logo: {
        600: 'var(--color-logo-600, #000)',
        500: 'var(--color-logo-500, #000)',
        400: 'var(--color-logo-400, #000)',
        300: 'var(--color-logo-300, #000)',
        100: 'var(--color-logo-100, #000)'
      },
      background: {
        200: 'var(--color-background-200, #000)',
        300: 'var(--color-background-300, #000)'
      },
      neutral: {
        300: 'var(--color-neutral-300, #000)',
        100: 'var(--color-neutral-100, #000)'
      },
      default: {
        current: 'currentColor',
        none: 'transparent',
      },
      warning: {
        100: 'var(--color-warning-100, #000)',
      },
      success: {
        100: 'var(--color-success-100, #000)'
      }
    },

    fontFamily: {
      default: 'var(--font-default-family, Arial)'
    },

    fontWeight: {
      regular: 'var(--font-weight-400, 400)', // 400
      medium: 'var(--font-weight-600, 600)', // 600
      bold: 'var(--font-weight-700, 700)' // 700
    },

    fontSize: {
      xxsm: ['var(--font-size-xxs)', { lineHeight: 'normal' }], // 8
      xsm: ['var(--font-size-xs)', { lineHeight: '0.938rem' }], // 12
      sm: ['var(--font-size-sm)', { lineHeight: '1.094rem' }], // 14
      md: ['var(--font-size-regular)', { lineHeight: '1.25rem' }], // 16
      xlg: ['var(--font-size-xl)', { lineHeight: '2.344rem' }], // 30

    },

    transitionProperty: {
      colors:
        'color, background-color, border-color, text-decoration-color, fill, stroke, outline, box-shadow',
      transform: 'transform opacity',
      size: 'width, min-width, height, min-height',
      spacing: 'margin, padding',
      opacity: 'opacity',
      all: 'all'
    },

    extend: {
      animation: {
        spinner: 'spinner var(--slowAnimationTime) linear infinite',
      },

      keyframes: {
        spinner: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
      }
    },
  },
  plugins: [],
}
