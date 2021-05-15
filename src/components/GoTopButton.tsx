import React from "react";
import styled from "styled-components";

import { useScrollTrigger, Zoom, IconButton } from "@material-ui/core";
import { TiArrowUpOutline } from "react-icons/ti";

const GoTopButton = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 200,
  });

  const handleClick = () => {
    const anchor = document.querySelector("#back-to-top-anchor");
    console.log(!!anchor);

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <StyledDiv onClick={handleClick}>
        <IconButton color="primary" className="icon-button">
          <TiArrowUpOutline />
        </IconButton>
      </StyledDiv>
    </Zoom>
  );
};

const StyledDiv = styled.div`
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  z-index: 10;

  .icon-button {
    font-size: 1.35em;
    background: #e2dfd6;
    box-shadow: 0.1rem 0.3rem 0.75rem rgba(49, 49, 51, 0.15);
  }
`;

export default GoTopButton;
