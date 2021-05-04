import { ZIndex } from "@material-ui/core/styles/zIndex";
import { DefaultTheme } from "styled-components";

declare module "@material-ui/core/styles/createMuiTheme" {
  interface newZIndex extends ZIndex {
    default: 1;
    backdrop: 3;
  }
  interface Theme {
    ZIndex: newZIndex;
  }
}
