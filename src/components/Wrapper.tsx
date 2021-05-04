import React, { ReactElement } from "react";

// components and resources
import "../static/bootstrap.css";

import store from "../stores/store";
import { Provider } from "react-redux";
import ThemeWrapper from "./ThemeWrapper";

/**
 * Wrapper component for gatsby-browser and gatsby-ssr
 *
 * @component
 */

type WrapperProps = {
  children: ReactElement;
};

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <Provider store={store}>
      <ThemeWrapper>{children}</ThemeWrapper>
    </Provider>
  );
};

export default Wrapper;
