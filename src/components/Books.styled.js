import styled from "styled-components";

export const StyledBooks = styled.section`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    flex-direction: column;
    align-items: center;

    &::before {
      position: absolute;
      z-index: -1;
      width: 100%;
      height: 8rem;
      background: var(--color-yellow);
      content: " ";
    }
  }

  h2 {
    margin: 0;
    font-size: 1.2rem;
  }
`;

export const Content = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.md};

  ul {
    display: flex;
    margin: 0;
    padding: 0;

    li {
      margin: 0;
      list-style-type: none;
    }
  }
`;
