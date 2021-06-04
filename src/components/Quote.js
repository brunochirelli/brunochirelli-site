import React from "react";
import { Content, StyledQuote, Illustration, Figure } from "./Quote.styled";

import curiosity from "../images/curiosity.svg";

const Quote = () => {
  return (
    <StyledQuote>
      <Content>
        <Figure>
          <blockquote>
            "Eu não daria um tostão pela simplicidade neste lado que antecede a
            complexidade, mas daria minha vida pela simplicidade que está do
            outro lado da complexidade"
          </blockquote>
          <figcaption>Oliver Wendell Holmes</figcaption>
        </Figure>
        <p>
          Sou um apaixonado por comunicação, psicologia, sociologia e tecnologia
          que acredita que depois dos esforços corretos para o bem comum, a
          recompensa é gigantesca.
        </p>
      </Content>

      <Illustration>
        <img src={curiosity} alt="" />
      </Illustration>
    </StyledQuote>
  );
};

export default Quote;
