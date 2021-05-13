import React from "react";
import styled from "styled-components";

type ArticleCardProps = {
  title: string;
};

const ArticleCard = ({ title }: ArticleCardProps) => {
  return (
    <StyledArticle>
      <img
        src="https://images.unsplash.com/photo-1620840789492-31fcaf3be617?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
        alt=""
      />
      <small>Categoria</small>
      <h2>{title}</h2>
      <small>9 de dezembro de 2020 - 3 minutos</small>
    </StyledArticle>
  );
};

const StyledArticle = styled.article`
  img {
    width: 100%;
    height: 11rem;
    object-fit: cover;
    object-position: center;

    @media screen and (min-width: 600px) {
      height: 14rem;
    }
  }

  h2 {
    margin: 0;
    font-size: 1.2em;
    line-height: 1.2;

    @media screen and (min-width: 600px) {
      font-size: 1.4em;
    }
  }
`;

export default ArticleCard;
