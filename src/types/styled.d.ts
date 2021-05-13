// import original module declarations
import "styled-components";
import { ThemeSet } from "styled-theming";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      primary: {
        main: string;
      };
      secondary: {
        main: string;
      };
    };
    font: {
      display: string;
      heading: string;
      primary: string;
      secondary: string;
    };
    background: {
      default: ThemeSet;
      contrast: ThemeSet;
      header: ThemeSet;
      headerMid: ThemeSet;
    };
    textColor: {
      default: ThemeSet;
      heading: ThemeSet;
      headingHover: ThemeSet;
      button: {
        primary: ThemeSet;
        secondary: ThemeSet;
      };
    };
    zIndex: {
      default: 1;
      menubar: 2;
      backdrop: 3;
    };
  }
}
