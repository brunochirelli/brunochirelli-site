import React, { ReactElement } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";

import { RootState } from "../stores/store";
import defaultTheme from "../themes/defaultTheme";

/**
 * THEME WRAPPER
 *
 * The goal of this component is handle the Redux theme mode with the
 * styled-components theme
 *
 * @component
 *
 */

type ThemeWrapperProps = {
  children: ReactElement;
};

const ThemeWrapper = ({ children }: ThemeWrapperProps) => {
  const { mode } = useSelector((state: RootState) => state.theme);

  // Define new interface to concat mode and default theme
  interface DefaultThemeAll extends DefaultTheme {
    mode: string;
  }

  // spread theme and mode
  const theme: DefaultThemeAll = {
    ...defaultTheme,
    mode,
  };
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeWrapper;
