import React from "react";
import Helmet from "react-helmet";

import "./src/css/normalize.css";
import "./src/css/global.css";

import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./src/themes/defaultTheme";

const Wrapper = ({ children }) => {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
    </>
  );
};

export default Wrapper;
