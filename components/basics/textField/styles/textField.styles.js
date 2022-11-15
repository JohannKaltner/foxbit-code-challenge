import styled, { css } from "styled-components";

export const FieldWrapper = styled.div`
  margin-top: 1.5em;
  position: relative;
`;

export const Field = styled.input(
  ({ theme }) => css`
    -webkit-font-smoothing: antialiased;
    align-self: flex-end;
    appearance: none;
    background-color: ${theme.colors.white};
    border-color: ${theme.colors.gray40};
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
    box-sizing: border-box;
    color: ${theme.colors.black};
    cursor: default;
    display: flex;
    font-size: 1rem;
    font-family: "gilroymedium";
    font-weight: inherit;
    height: 100%;
    outline: none;
    padding: 18px 48px 18px 42px;
    position: relative;
    text-decoration: inherit;
    text-transform: inherit;
    transition: color 0.2s ease 0s, border-color 0.2s ease 0s,
      box-shadow 0.2s ease 0s;
    width: 100%;
    will-change: border-color, background-color, color;

    &:focus {
      border-color: ${theme.colors.black};
      box-shadow: rgb(29 29 33 / 3%) 0px 0px 0px 6px;
    }

    &:focus + label {
      color: ${theme.colors.black};
      background-color: ${theme.colors.white};
      transform: translateX(-32px) translateY(-34px) scale(0.8);
      margin-left: 10px;
    }
  `
);

export const Label = styled.label(
  ({ theme }) => css`
    background-color: ${theme.colors.white};
    border-radius: 4px;
    color: ${theme.colors.black};
    left: 36px;
    margin-top: 1px;
    pointer-events: none;
    bottom: 18px;
    padding: 0px 8px;
    position: absolute;
    transform-origin: left bottom;
    transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1) 0s,
      opacity 0s cubic-bezier(0.4, 0, 0.2, 1) 0s;
    white-space: nowrap;
    will-change: transform, scale;
  `
);

export const TextFieldIcon = styled.div`
  & > svg {
    left: 1rem;
    position: absolute;
    right: auto;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
  }
`;
