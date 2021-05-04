// import original module declarations
import { Theme } from "@material-ui/core";
import "styled-components";
import { ThemeSet } from "styled-theming";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme extends Theme {
    zIndex: {
      default: 1;
      backdrop: number;
    };
    backgroundColor: ThemeSet;
    textColor: ThemeSet;
  }
}
