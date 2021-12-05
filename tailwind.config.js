module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        "1/7": "20rem",
        "1/14": "25rem",
        "1/28": "30rem",
        imageWidthLg: "450px",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        textPrimaryColor: "#1e266d",
        bgPrimary: "#e5f7fe",
        bgSecondary: "#fbfeff",
        bgAccent: "#fef0dd",
        buttonPrimary: "#f6a425",
      },

      fontSize: {
        customHeaderFontMobile: "2.5rem",
        customMediumFontMobile: "1.4rem",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active", "group-focus", "focus"],
      scale: ["group-hover"],
      translate: ["group-hover"],
      stroke: ["hover", "focus"],
      fill: ["hover", "focus"],

      display: ["focus", "group-focus"],
    },
  },
};
