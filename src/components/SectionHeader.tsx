import { Container } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

type SectionHeaderProps = {
  title: string;
  lead?: string;
};

const SectionHeader = ({ title, lead }: SectionHeaderProps) => {
  return (
    <StyledDiv>
      <Container>
        <h1 className="section-header">{title}</h1>
        {lead && (
          <p className="lead">
            Crio identidades visuais que se adaptem a estratégia do seu negócio
          </p>
        )}
      </Container>
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
