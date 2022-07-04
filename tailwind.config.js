module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            'blockquote p:first-of-type::before': { 
              content: 'none' 
            },
            'blockquote p:first-of-type::after': { 
              content: 'none' 
            },
          },
        },
      },
    },
  },
  plugins: [
    // ...
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
