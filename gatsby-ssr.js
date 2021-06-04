import React from "react";
import Wrapper from "./Wrapper";

export const wrapRootElement = ({ element }) => {
  return (
    <>
      <Wrapper>{element}</Wrapper>
    </>
  );
};
