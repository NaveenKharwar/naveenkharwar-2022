module.exports = {
  mode: 'jit',
  content: [
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#f5eae6',
        'secondary': '#e29179',
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
