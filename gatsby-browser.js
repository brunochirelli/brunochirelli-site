import React from "react";
import Wrapper from "./src/components/Wrapper";

export const wrapRootElement = ({ element }) => (
  <Wrapper>{element}</Wrapper>
);
