import React from "react";
import styled from "styled-components";

import { Container, Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import { RootState } from "../stores/store";

type ArticleProps = {
  html?: any;
};

const Article = ({ html }: ArticleProps) => {
  const fontBase = useSelector((state: RootState) => state.theme.fontBase);

  return (
    <StyledContainer component="article" maxWidth="md" fontBase={fontBase}>
      <Grid container>
        <Grid item md={1}></Grid>
        <Grid className="article-text" item xs={12} sm={10}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae turpis
            a nisl rhoncus tincidunt. Vivamus a pulvinar lacus. Donec purus sapien,
            finibus sit amet odio nec, blandit accumsan tellus. Nunc vestibulum vestibulum
            auctor.
          </p>
          <p>
            In at enim urna. Pellentesque eget nunc sed urna commodo cursus. Aliquam
            tempus porttitor odio ac blandit. Fusce euismod maximus neque, at elementum
            ante efficitur eu.
          </p>
          <img
            src="https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=669&q=80"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt=""
          />
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
