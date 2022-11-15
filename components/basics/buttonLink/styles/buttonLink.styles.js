import styled, { css } from "styled-components";

export const ButtonLinkBase = styled.a(
  ({ theme }) => css`
    font-size: 0.875rem;
    font-family: gilroymedium;
    color: ${theme.colors.primary};

    border-radius: 4px;
    transition: background-color 0.3s ease 0s, color 0.3s ease 0s;
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: center;
    padding: 0.75rem 0;

    @media (min-width: ${theme.breakpoints.medium}px) {
      padding: 0.75rem 1.25rem;
      border: 1px solid ${theme.colors.primary};
    }
  `
);
