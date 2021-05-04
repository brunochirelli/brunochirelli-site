import { DefaultTheme } from "styled-components";
import theme from "styled-theming";

const defaultTheme: DefaultTheme = {
  zIndex: {
    default: 1,
    backdrop: 3,
  },
  // palette: {
  //   primary: {
  //     main: "#F96756",
  //   },
  // },
  backgroundColor: theme("mode", {
    light: "#fff",
    dark: "#000",
  }),
  textColor: theme("mode", {
    light: "#000",
    dark: "#fff",
  }),
  // breakPoints: {
  //   sm: "600px",
  //   md: "900px",
  // },
};

export default defaultTheme;
