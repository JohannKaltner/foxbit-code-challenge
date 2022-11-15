import styled, { createGlobalStyle, css } from "styled-components";

export const Container = styled.main(
  ({ theme }) => css`
    display: flex;
    flex: 1 1 auto;
    background: ${(props) => props.theme.colors.gray20};
    flex-direction: column-reverse;
    @media (min-width: ${theme.breakpoints.large}px) {
      flex-flow: row wrap;
    }
  `
);

export const GlobalOverrides = createGlobalStyle(
  () => css`
    * {
      box-sizing: border-box;
    }
  `
);
