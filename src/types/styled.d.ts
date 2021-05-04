// import original module declarations
import "styled-components";
import { ThemeSet } from "styled-theming";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    zIndex: {
      default: 1;
      backdrop: number;
    };
    backgroundColor: ThemeSet;
    textColor: ThemeSet;
  }
}
