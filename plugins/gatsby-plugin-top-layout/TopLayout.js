import React from "react";
import { Helmet } from "react-helmet";
import { Provider } from "react-redux";

import CssBaseline from "@material-ui/core/CssBaseline";

import store from "../../src/stores/store";
import ThemeWrapper from "../../src/components/ThemeWrapper";
import "../../src/static/global.css";

export default function TopLayout({ children }) {
  return (
    <Provider store={store}>
      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="preconnect" href="https://use.typekit.net"></link>
        <link rel="preconnect" href="https://p.typekit.net"></link>
        <link rel="stylesheet" href="https://use.typekit.net/mxl3jpq.css"></link>
      </Helmet>
      <CssBaseline />
      <ThemeWrapper>{children}</ThemeWrapper>
    </Provider>
  );
}
