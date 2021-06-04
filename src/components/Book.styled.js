import styled from "styled-components";

export const StyledBook = styled.div`
  margin: 1rem;
  background: white;

  img {
    width: auto;
    height: 10rem;
    object-fit: cover;
    object-position: center;
    box-shadow: 0.25rem 0.25rem 0 rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
      box-shadow: 0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.1);
      transform: scale(1.2);
    }
  }
`;
