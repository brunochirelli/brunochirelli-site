import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { StyledPortfolioItem } from "./PortfolioItem.styled";

const PortfolioItem = () => {
  return (
    <StyledPortfolioItem>
      <StaticImage
        src="https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        alt=""
      />
    </StyledPortfolioItem>
  );
};

export default PortfolioItem;
