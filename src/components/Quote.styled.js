import styled from "styled-components";

export const StyledQuote = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  max-width: ${({ theme }) => theme.breakpoints.lg};
  margin: 2rem auto;
  place-items: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
    margin: 4rem auto;
  }
`;

export const Content = styled.div`
  padding: 1rem;
  line-height: 1.2;
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 1rem 5rem;
    text-align: left;
  }
`;

export const Figure = styled.figure`
  margin: 0;
  padding: 0 0.25rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0;
  }

  blockquote {
    margin: 0 0 1.5rem;
    font-size: 1.4em;
    font-family: "Fraunces", serif;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
      font-weight: 700;
    }
  }

  figcaption {
    margin-bottom: 2rem;
    font-weight: bolder;
    font-family: inherit;
  }
`;

export const Illustration = styled.div`
  padding: 1rem;

  img {
    width: 100%;
    margin: 0 auto;
    object-fit: contain;
    object-position: center;
  }
`;
