import { DefaultTheme } from "styled-components";
import theme from "styled-theming";

import { createMuiTheme, Theme } from "@material-ui/core/styles";
import { lightGreen } from "@material-ui/core/colors";

const muiTheme: Theme = createMuiTheme({
  palette: {
    primary: lightGreen,
    secondary: {
      main: "#16282b",
      light: "#3d5054",
      dark: "#16282b",
    },
  },
  typography: {
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 500,
    },
    h4: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 700,
    },
  },
});

const defaultTheme: DefaultTheme = {
  ...muiTheme,
  zIndex: {
    default: 1,
    menubar: 2,
    backdrop: 3,
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
  textColor: theme("mode", {
    light: "rgba(0, 0, 0, 0.87)",
    dark: "rgba(255, 255, 255, 0.7)",
  }),
};

export default defaultTheme;
