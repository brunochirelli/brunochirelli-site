/* eslint-disable no-undef */

import React from "react";
import { render } from "../../test-utils";
import Header from "./Header";

test("Displays the correct title", () => {
  const { getByTestId, getByText } = render(<Header siteTitle="One-Day-Site" />);
  // Assertion
  expect(getByTestId("header-title")).toHaveTextContent("One-Day-Site");

  expect(getByText("switch to light")).toHaveTextContent("switch to light");
});
