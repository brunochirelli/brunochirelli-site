import styled from "styled-components";

export const StyledHeader = styled.header`
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    text-align: center;
    background: var(--color-yellow);

    @media (orientation: landscape) {
      min-height: 100vh;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      min-height: 60vh;
    }

    .skip {
      position: absolute;
      top: -20rem;
      left: 0;
      transition: top 0.3s ease;

      &:focus,
      &:active {
        top: 0;
      }
    }

    nav {
      display: flex;
      justify-content: center;

      ul {
        display: flex;
        flex-wrap: wrap;
        margin: 0;
        padding: 0;

        li {
          flex-grow: 1;
          list-style-type: none;

          a {
            padding: 0 0.5rem;
            color: black;
            font-weight: 700;
            text-decoration: none;

            &:hover {
              text-decoration: underline;
            }
          }

          &.logo {
            width: 100%;
            font-weight: 700;
            font-size: 2rem;
            font-family: "Fraunces", serif;

            a {
              display: block;
              padding: 1rem 0;
              color: black;
              text-decoration: none;

              &:hover {
                border-bottom: none;
              }
            }
          }
        }
      }
    }

    .feature {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      align-items: center;
      justify-content: center;
      max-width: 50rem;
      padding: 1rem;

      img {
        width: 6rem;
        padding: 1rem 0;

        @media screen and (min-height: ${({ theme }) => theme.breakpoints.sm}) {
          width: 8rem;
        }
      }

      h1 {
        margin: 0;
        padding: 2rem 0;
        font-weight: 700;
        font-size: 1.4em;
        font-family: "Fraunces", serif;

        @media screen and (min-height: ${({ theme }) => theme.breakpoints.sm}) {
          font-size: 1.8em;
        }

        @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
          font-size: 2.3em;
        }
      }

      a {
        color: black;
        font-weight: 700;
      }
    }
  }
`;
