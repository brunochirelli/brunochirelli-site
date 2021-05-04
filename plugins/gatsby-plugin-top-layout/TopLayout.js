import React from "react";
import { Helmet } from "react-helmet";
import { Provider } from "react-redux";

import CssBaseline from "@material-ui/core/CssBaseline";

import store from "../../src/stores/store";

import ThemeWrapper from "../../src/components/ThemeWrapper";

export default function TopLayout({ children }) {
  return (
    <Provider store={store}>
      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <CssBaseline />
      <ThemeWrapper>{children}</ThemeWrapper>
    </Provider>
  );
}
