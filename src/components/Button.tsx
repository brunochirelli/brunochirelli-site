import React, { ReactNode } from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { FiArrowRight } from "react-icons/fi";

type ButtonProps = {
  children: ReactNode;
  to: string;
  variant: "primary" | "secondary";
};

const Button = ({ to, children, variant }: ButtonProps) => {
  return (
    <StyledButton to={to} variant={variant}>
      <div className="icon">
        <FiArrowRight />
      </div>
      <div>{children}</div>
    </StyledButton>
  );
};

type StyledButtonProps = {
  variant: "primary" | "secondary";
};

const StyledButton = styled(Link)<StyledButtonProps>`
  display: flex;
  align-items: center;
  color: ${({ theme, variant }) =>
    variant === "primary" ? theme.palette.primary.main : theme.palette.secondary.main};
  font-weight: bolder;
  text-decoration: none;

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
    transform: ${({ variant }) =>
      variant === "primary" ? "rotate(0)" : "rotate(90deg)"};
  }
`;

export default Button;
