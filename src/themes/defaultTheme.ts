import { DefaultTheme } from "styled-components";
import theme from "styled-theming";

import { createMuiTheme } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
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
    backdrop: 3,
  },
  backgroundColor: theme("mode", {
    light: "#fff",
    dark: "#000",
  }),
  textColor: theme("mode", {
    light: "#000",
    dark: "#fff",
  }),
};

export default defaultTheme;
