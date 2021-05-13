import { DefaultTheme } from "styled-components";
import theme from "styled-theming";

const defaultTheme: DefaultTheme = {
  palette: {
    primary: {
      main: "rgb(10, 191, 83)",
    },
    secondary: {
      main: "rgb(0, 17, 44)",
    },
  },
  background: {
    default: theme("mode", {
      light: "rgb(250,250,250)",
      dark: "rgb(22, 24, 25)",
    }),
    contrast: theme("mode", {
      light: "#fff",
      dark: "rgb(0, 0, 0)",
    }),
    header: theme("mode", {
      light: "#fff",
      dark: "rgb(16,21,23)",
    }),
    headerMid: theme("mode", {
      light: "rgb(250,250,250)",
      dark: "rgb(39, 43, 45)",
    }),
  },
  font: {
    display: `"bely-display", "bely", "sans-serif"`,
    heading: `"bely", "sans-serif"`,
    primary: `"open-sans", "sans-serif"`,
    secondary: `"bely", "serif"`,
  },
  textColor: {
    default: theme("mode", {
      light: "rgb(39,43,45)",
      dark: "rgb(210,210,210)",
    }),
    heading: theme("mode", {
      light: "rgb(5,5,5)",
      dark: "rgb(250, 250, 250)",
    }),
    headingHover: theme("mode", {
      light: "rgb(59 65 53)",
      dark: "rgb(245, 245, 245)",
    }),
    button: {
      primary: theme("mode", {
        light: "rgb(5,5,5)",
        dark: "rgb(250, 250, 250)",
      }),
      secondary: theme("mode", {
        light: "rgb(5,5,5)",
        dark: "rgb(250, 250, 250)",
      }),
    },
  },
  zIndex: {
    default: 1,
    menubar: 2,
    backdrop: 3,
  },
};

export default defaultTheme;
