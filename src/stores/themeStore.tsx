import React, { createContext, ReactNode, useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";

import defaultTheme from "../themes/defaultTheme";

// defining the context
export const MyThemeContext: any = createContext("light");

type ProviderProps = {
  children: ReactNode;
};

// defining the provider
const MyThemeProvider = ({ children }: ProviderProps) => {
  const [actualTheme, setActualTheme] = useState("dark");

  // defining the object to be outputed based on state
  // with that we can handle de current theme (dark, light, etc...)
  const value = {
    actualTheme,
    toggleTheme: () =>
      setActualTheme(actualTheme === "dark" ? "light" : "dark"),
  };

  // extending the interface to type theme object
  interface DefaultThemeAll extends DefaultTheme {
    mode: string;
  }

  // typing and definig the final theme object passing all
  // the theme + the mode that corresponds to the actual theme
  const theme: DefaultThemeAll = {
    ...defaultTheme,
    mode: actualTheme,
  };

  // Returning the provider AND the theme provider.
  // This way we can toggle the mode of the theme.
  return (
    <MyThemeContext.Provider value={value}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </MyThemeContext.Provider>
  );
};

export default MyThemeProvider;
