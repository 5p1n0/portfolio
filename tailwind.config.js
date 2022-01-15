const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      'xxs': '280px',
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      backgroundSize: {
        '50': '200px 40px',
      },
      fontFamily: {
        'heading': ['Rubik'],
        'body': ['"Roboto Mono"'],
      },
      fontSize: {
        small: ['1rem','1.4375rem'],
        base: ['1rem','1.625rem'],
        medium: ['2.325rem','1.125'],
        max: ['5rem','1.25'],
      },
      colors: {
        'dark-gray': {
          darkest: '#1d1d1d',
          dark: '#434343',
          DEFAULT: '#2a2a2a',
          light: '#464646',
        },
        'light-gray': '#efefef',
        'vivid-orange': '#ee8219',
      },
      maxWidth: {
        DEFAULT: '1090px'
      },
      transitionProperty: {
        'width': 'width',
        'padding': 'padding-top, padding-bottom'
      },
      transitionTimingFunctions: {
        'ease': 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
      },
      keyframes: {
        'bounce-left': {
          '0%, 40%, 100%': { left: '0' },
          '20%': { left: '10px' },
        },
        'fade-in-up': {
          '0%': { 
            opacity: '0',
            transform: 'translateY(100%)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0%)'
          },
        }
      },
      animation: {
        'bounce-left': 'bounce-left 3s ease infinite',
        'fade-in-up': 'fade-in-up 0.5s ease 0.1s forwards'
      }
    },
  },
  plugins: [],
}
