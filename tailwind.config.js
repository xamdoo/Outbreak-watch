/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxSizing: {
        'border-box': 'border-box',
      },
      fontWeight: {
        '300': '300',
      },
      backgroundColor: theme => ({
        'theme-background': theme('colors.white'),
      }),
      textColor: theme => ({
        'font-color': theme('colors.black'),
      }),
      fontFamily: {
        'sans': ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      },
      minHeight: {
        '100': '100vh',
      }
    },
  },
  plugins: [],
}