import React, { ReactNode } from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { FiArrowRight, FiArrowDown } from "react-icons/fi";

type ButtonProps = {
  children: ReactNode;
  to: string;
  onClick?: any;
  contained?: boolean;
};

const Button = ({ to, children, contained }: ButtonProps) => {
  // Check if the link is to an anchor to decide wich style of button will be outputed
  const anchored = to?.split("")[0] === "#" ? true : false;

  const handleScroll = () => {
    // Grab the "to" variable and select the element and scroll to them
    document.querySelector(to)?.scrollIntoView({ behavior: "smooth" });
  };

  if (contained)
    return (
      <>
        {anchored ? (
          <StyledContained
            variant="secondary"
            role="button"
            aria-label="Descer até o local"
            onClick={handleScroll}
          >
            <div className="anchored">
              <div>{children}</div>
            </div>
          </StyledContained>
        ) : (
          <StyledContained
            variant="primary"
            role="button"
            aria-label="Ir para outra página"
          >
            <Link to={to}>
              <div>{children}</div>
            </Link>
          </StyledContained>
        )}
      </>
    );

  if (anchored)
    return (
      <StyledButton
        variant="secondary"
        role="button"
        aria-label="Descer até o local"
        onClick={handleScroll}
      >
        <div className="anchored">
          <div className="icon">
            <FiArrowDown />
          </div>
          <div>{children}</div>
        </div>
      </StyledButton>
    );

  return (
    <StyledButton variant="primary" role="button" aria-label="Ir para outra página">
      <Link to={to}>
        <div className="icon">
          <FiArrowRight />
        </div>
        <div>{children}</div>
      </Link>
    </StyledButton>
  );
};

type StyledButtonProps = {
  variant: "primary" | "secondary";
};

const StyledContained = styled.div<StyledButtonProps>`
  display: inline-block;
  padding: 0.75rem 1rem;
  font-weight: bolder;
  background: ${({ theme }) => theme.palette.primary.main};
  border-radius: 0.5rem;
  cursor: pointer;
`;

const StyledButton = styled.div<StyledButtonProps>`
  cursor: pointer;

  a,
  .anchored {
    display: flex;
    align-items: center;
    color: ${({ theme, variant }) =>
      variant === "primary" ? theme.palette.primary.main : theme.palette.secondary.main};
    font-weight: bolder;
    text-decoration: none;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.8em;
    height: 1.8em;
    margin-right: 0.5rem;
    color: white;
    background: ${({ theme, variant }) =>
      variant === "primary" ? theme.palette.primary.main : theme.palette.secondary.main};
    border-radius: 50%;
  }
`;

export default Button;
