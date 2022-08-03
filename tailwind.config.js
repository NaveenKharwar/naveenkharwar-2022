module.exports = {
  mode: 'jit',
  content: [
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#FECD45',
        'secondary': '#4660f6',
      },
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
        'section-heading': ['Playfair Display', 'serif'],
      },
    },
  },
  variants: {},
  plugins: [],
}
