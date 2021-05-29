import React, { ReactElement, ReactNode } from "react";
import styled from "styled-components";

import { Container, Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import { RootState } from "../stores/store";

type ArticleProps = {
  children: ReactNode;
};

const Article = ({ children }: ArticleProps) => {
  const fontBase = useSelector((state: RootState) => state.theme.fontBase);

  return (
    <StyledContainer component="article" maxWidth="md" fontBase={fontBase}>
      <Grid container>
        <Grid item md={1}></Grid>
        <Grid className="article-text" item xs={12} sm={10}>
          {children}
        </Grid>
        <Grid item md={1}></Grid>
      </Grid>
    </StyledContainer>
  );
};

const StyledContainer: any = styled(Container)`
  .article-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    ul,
    blockquote {
      max-width: 33rem;
      line-height: 1.8;
    }

    img {
      width: 100%;
      margin-top: 1rem;
    }
  }
`;

export default Article;
