module.exports = {
  content: ['./src/**/*.{vue,js,ts}'],
  daisyui: {
    themes: [
      {
        qrl: {
          "primary": "#ffa729",
          "secondary": "#4aafff",
          "accent": "#523ae2",
          "neutral": "#0b181e",
          "base-100": "#ffffff",
          "info": "#4aafff",
          "success": "#4fe296",
          "warning": "#fde047",
          "error": "#ff6066",
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
