import styled, { css } from "styled-components";

export const VariationBadgeContainer = styled.div(
  (props) => css`
    display: flex;
    -webkit-box-pack: end;
    justify-content: flex-end;
    min-width: 48px;
    position: absolute;

    background: ${props.isVariationPositive ? "#ebfaf4" : "#fceded"};
    border-radius: 12px;
    line-height: 0;
    padding: 0.25rem 0.25rem 0.25rem 0.5rem;
    top: 1.5rem;
    right: 1.25rem;
  `
);

export const BadgeText = styled.div(
  (props) => css`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    color: ${props.isVariationPositive ? "#214739" : "#5c3030"};

    font-weight: 700;
    font-size: 0.75rem;
    line-height: 0.75rem;
  `
);
