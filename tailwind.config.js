module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", // Wichtig: Gatsby nutzt src/
    ],
    safelist: [
      'justify-around',
      'flex-col',
      'flex-row',
      'underline',
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }