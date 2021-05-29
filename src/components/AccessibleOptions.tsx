import React from "react";
import styled from "styled-components";

import { Container, Typography } from "@material-ui/core";
import { BiSun, BiMoon } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../stores/store";
import { decreaseFont, increaseFont, toggleTheme } from "../slices/themeSlice";

const AccessibleOptions = () => {
  const mode = useSelector((state: RootState) => state.theme.mode);

  const dispatch = useDispatch();

  const toggle = () => dispatch(toggleTheme());
  const increase = () => dispatch(increaseFont());
  const decrease = () => dispatch(decreaseFont());

  return (
    <StyledDiv>
      <Container className="container">
        <Typography variant="overline" component="a" href="#content">
          Ir para conteúdo
        </Typography>
        <div className="options">
          <Typography variant="overline">Acessibilidade</Typography>
          <div role="button" aria-label="Aumentar fonte" onClick={increase}>
            A+
          </div>
          <div role="button" aria-label="Diminuir fonte" onClick={decrease}>
            A-
          </div>
          <div className="icon" role="button" onClick={toggle}>
            {mode === "light" ? <BiSun /> : <BiMoon />}
          </div>
        </div>
      </Container>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  /**
  Hide on mobiles
  Accessible options will be handled on overlay menu
 */
  /* @media screen and (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    display: block;
  } */

  display: none;
  font-size: 0.7rem;
  background: ${({ theme }) => theme.background.headerMid};
  /* background: "rgb(250,250,250)"; */
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  user-select: none;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .icon {
    display: block;
    padding-bottom: 0.2rem;
    font-size: 1rem;
  }

  .options {
    span {
      padding: 0 0.5rem;
    }

    div {
      height: 24px;
      margin: 0.25rem;
      padding: 0.25rem 0.5rem;
      font-weight: bolder;
      background: ${({ theme }) => theme.background.contrast};
      border-radius: 25%;
      cursor: pointer;

      &:hover {
        background: rgba(0, 0, 0, 0.25);
      }
    }

    display: flex;
    align-items: center;
  }

  a {
    display: block;
    padding: 0.2rem 0;
    color: inherit;
    text-decoration: none;
  }
`;

export default AccessibleOptions;
