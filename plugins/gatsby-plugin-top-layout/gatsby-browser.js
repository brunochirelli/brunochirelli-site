import React from "react";
import TopLayout from "./TopLayout";

// element.scrollIntoView polyfill to be smooth
import smoothscroll from "smoothscroll-polyfill";
smoothscroll.polyfill();

export const wrapRootElement = ({ element }) => {
  return <TopLayout>{element}</TopLayout>;
};
