import React from "react";
import styled from "styled-components";

type SectionHeaderProps = {
  title: string;
};

const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <StyledDiv>
      <h1>{title}</h1>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  h1 {
    margin: 2.5rem 0 1rem 0;
    text-align: center;
  }
`;

export default SectionHeader;
