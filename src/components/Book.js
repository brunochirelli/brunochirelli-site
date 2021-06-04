import React from "react";
import { StyledBook } from "./Book.styled";

const Book = ({ image }) => {
  return (
    <StyledBook>
      <img src={image} alt="" />
    </StyledBook>
  );
};

export default Book;
