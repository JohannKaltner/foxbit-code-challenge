import styled from "styled-components";

export const CryptoListItemWrapper = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  padding: 1.5rem 1.25rem;
  background-color: #ffffff;
  box-shadow: rgb(18 18 18 / 2%) 0px 24px 60px 0px,
    rgb(18 18 18 / 4%) 0px 0px 40px 0px;
  max-height: 11.25em;
`;

export const Section = styled.div`
  margin-bottom: 0.25rem;
  display: flex;
`;

export const PriceText = styled.span`
  color: ${(props) => props.theme.colors.secondaryBlack};
  font-weight: 500;
  font-size: 1.25rem;
`;

export const VolumeText = styled.span`
  color: ${(props) => props.theme.colors.secondaryBlack};
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1;
  margin-top: 0.25rem;
`;

export const VolumeIndicator = styled.span`
  color: #6f7075;
  font-weight: 500;
  font-size: 0.65rem;
  line-height: 1;
`;

export const VolumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.25rem;
`;

export const Currency = styled.span`
  color: #b7b8be;
  font-weight: 500;
  font-size: 1.25rem;
  margin-right: 0.25rem;
`;
