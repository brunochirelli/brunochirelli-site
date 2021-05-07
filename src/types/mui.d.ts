import { Theme, ThemeOptions } from "@material-ui/core";
import { ZIndex } from "@material-ui/core/styles/zIndex";
import { DefaultTheme } from "styled-components";
import { ThemeSet } from "styled-theming";

declare module "@material-ui/core/styles/createMuiTheme" {
  export interface ThemeOptions {}
}
