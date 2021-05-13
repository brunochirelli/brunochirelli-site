import React, { ReactNode } from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { FiArrowRight } from "react-icons/fi";

type ButtonProps = {
  children: ReactNode;
  to: string;
};

const Button = ({ to, children }: ButtonProps) => {
  return (
    <StyledButton to={to}>
      <div className="icon">
        <FiArrowRight />
      </div>
      <div>{children}</div>
    </StyledButton>
  );
};

const StyledButton = styled(Link)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.palette.primary.main};
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
    background: ${({ theme }) => theme.palette.primary.main};
    border-radius: 50%;
  }
`;

export default Button;
