module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '1/7': '20rem',
        '2/7': '28.5714286%',
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        neutral: {
          light: "#85d7ff",
          normal: "#151522",
          secondary:"#FF6F3D",
          dark: "#009eeb",
        },
        pink: {
          light: "#ff7ce5",
          DEFAULT: "#ff49db",
          dark: "#ff16d1",
        },
        gray: {
          darkest: "#1f2d3d",
          dark: "#3c4858",
          DEFAULT: "#c0ccda",
          light: "#e0e6ed",
          lightest: "#f9fafc",
        },
      },
    },
    fontFamily: {

      'display': ['Oswald'],
      'body': ["Open Sans"],
     },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
