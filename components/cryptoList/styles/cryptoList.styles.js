import styled, { css } from "styled-components";

export const CryptoListWrapper = styled.div(
  ({ theme }) => css`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, 11em);
    gap: 0.75rem;
    -webkit-box-pack: center;
    justify-content: center;
    flex-basis: 41.2%;
    overflow-y: auto;
    height: 100vh;
    padding: 1.25em 0.75rem;

    @media (max-width: ${theme.breakpoints.medium}px) {
      grid-template-columns: repeat(auto-fit, 48%);
    }
  `
);
