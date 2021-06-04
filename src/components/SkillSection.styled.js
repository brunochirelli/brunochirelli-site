import styled from "styled-components";

export const StyledSection = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.sm};
  margin: 0 auto;
  padding: 1rem;

  h2 {
    margin: 0;
    text-align: center;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      text-align: left;
    }
  }
`;

export const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    justify-content: flex-start;
  } ;
`;
