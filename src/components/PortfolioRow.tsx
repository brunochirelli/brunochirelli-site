import React from "react";
import styled from "styled-components";

import { Grid } from "@material-ui/core";

const PortfolioRow = () => {
  return (
    <StyledDiv>
      <Grid container>
        <Grid item xs={6} sm={3}>
          <img
            src="https://images.unsplash.com/photo-1620862658014-b7cb662d3df4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt=""
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <img
            src="https://images.unsplash.com/photo-1621028149892-33ba8659c6ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            alt=""
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <img
            src="https://images.unsplash.com/photo-1511721285502-9f81e79be874?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
            alt=""
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <img
            src="https://images.unsplash.com/photo-1511721511189-ca0a98b3229e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
            alt=""
          />
        </Grid>
      </Grid>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  line-height: 0;

  img {
    width: 100%;
    height: 10rem;
    object-fit: cover;
    object-position: center;
    filter: grayscale();

    @media screen and (min-width: 600px) {
      height: 20rem;
    }

    &:hover {
      filter: unset;
    }
  }
`;

export default PortfolioRow;
