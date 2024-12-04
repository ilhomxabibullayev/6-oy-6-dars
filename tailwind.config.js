module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          DEFAULT: "1240px",
        },
      },
    },
  },
  plugins: [],
};
