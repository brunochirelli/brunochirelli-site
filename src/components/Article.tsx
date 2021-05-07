import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";

import { Container } from "@material-ui/core";
import { useSelector } from "react-redux";
import { RootState } from "../stores/store";

type ArticleProps = {
  html: any;
};

const Article = ({ html }: ArticleProps) => {
  const fontBase = useSelector((state: RootState) => state.theme.fontBase);

  return (
    <StyledContainer component="article" maxWidth="md" fontBase={fontBase}>
      {parse(html)}
    </StyledContainer>
  );
};

const StyledContainer: any = styled(Container)`
  font-size: ${({ fontBase }: { fontBase: number }) => fontBase}px;
  line-height: 1.75em;

  p {
    margin-bottom: 1.75em;
  }

  h2 {
    margin-top: 1.75em;
    /* margin-bottom: 1em; */
  }
`;

export default Article;
