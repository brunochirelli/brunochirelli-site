// import original module declarations
import { Theme } from "@material-ui/core";
import "styled-components";
import { ThemeSet } from "styled-theming";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme extends Theme {
    zIndex: {
      default: 1;
      menubar: 2;
      backdrop: 3;
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
  }
}
