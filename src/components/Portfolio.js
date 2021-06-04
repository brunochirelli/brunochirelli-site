import React from "react";

import { StyledPortfolio } from "./Portfolio.styled";

import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  return (
    <StyledPortfolio>
      <PortfolioItem />
      <PortfolioItem />
      <PortfolioItem />
      <PortfolioItem />
    </StyledPortfolio>
  );
};

export default Portfolio;
