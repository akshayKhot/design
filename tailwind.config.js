module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      // add customizations here
    },
  },
  plugins: [
    // ...
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
