import styled, { css } from "styled-components";

export const BaseButton = styled.button(
  ({ theme }) => css`
    margin-top: 1.5em;
    background-color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
    border-radius: 4px;
    color: ${theme.colors.white};
    cursor: not-allowed;
    font-family: "gilroymedium";
    font-size: 1.25rem;
    line-height: 18px;
    opacity: 1;
    padding: 1.25rem 2rem;
    pointer-events: none;
    width: 100%;
    justify-content: center;
    position: relative;
    display: flex;
    align-items: center;

    &:disabled {
      background-color: ${(props) => props.theme.colors.gray30};
      border: 1px solid ${(props) => props.theme.colors.gray30};
      color: ${(props) => props.theme.colors.gray50};
    }
  `
);
