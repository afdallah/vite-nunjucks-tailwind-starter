module.exports = {
  mode: 'jit',
  purge: ['src/**/*.html', 'src/**/*.js', 'src/**/*.jsx', 'src/**/*.ts', 'src/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#014165',
        secondary: '#39BCF3'
      },
      fontSize: {
        '2xs': '.8125rem',
        'base': ['.9375rem', '1rem']
      }
    },
    fontFamily: {
      sans: ['Avenir', 'ui-sans-serif', 'system-ui']
    },
    container: {
      screens: {
        sm: '100%',
        md: '100%',
        lg: '1024px',
        xl: '1280px'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio')
  ]
}