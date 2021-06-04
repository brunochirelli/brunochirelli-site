import styled from "styled-components";

export const StyledSkill = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0.25rem 0.25rem 0 0;
  text-transform: uppercase;
  border: 0.1rem solid black;
  border-radius: 0.25rem;

  img {
    width: 1.75rem;
    height: 1.75rem;
    padding: 0.25rem;
    object-fit: cover;
    object-position: center;
    overflow: hidden;
    border-radius: 0.25rem;
  }

  p {
    margin: 0;
    padding: 0 0.25rem 0 0;
    font-weight: 700;
    font-size: 0.85rem;
  }
`;
