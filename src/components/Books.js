import React from "react";
import Book from "./Book";
import { StyledBooks, Content } from "./Books.styled";

const Books = () => {
  return (
    <StyledBooks>
      <h2>Últimos livros lidos</h2>
      <Content>
        <ul>
          <li>
            <Book image="https://images-na.ssl-images-amazon.com/images/I/81kqrwS1nNL.jpg" />
          </li>
          <li>
            <Book image="https://a-static.mlcdn.com.br/618x463/entendendo-algoritmos-novatec-editora/novateceditora/99048591/ab0246cd065e29c6a01b6139ecb26e94.jpg" />
          </li>
          <li>
            <Book image="https://m.media-amazon.com/images/I/515Ditq591L.jpg" />
          </li>
          <li>
            <Book image="https://images-na.ssl-images-amazon.com/images/I/51TL4nFsLuL._SX342_SY445_QL70_ML2_.jpg" />
          </li>
          <li>
            <Book image="https://images-na.ssl-images-amazon.com/images/I/91Qqpz9qDYL.jpg" />
          </li>
        </ul>
      </Content>
    </StyledBooks>
  );
};

export default Books;
