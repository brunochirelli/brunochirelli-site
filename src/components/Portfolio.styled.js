import styled from "styled-components";

export const StyledPortfolio = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  gap: 1rem;
  max-width: ${({ theme }) => theme.breakpoints.md};
  margin: 0 auto;
  padding: 1rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
  }
`;
