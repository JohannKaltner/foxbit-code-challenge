import styled, { css } from "styled-components";

export const LoginPageWrapper = styled.article(
  ({ theme }) => css`
    flex-basis: 58.8%;
    width: 100%;
    height: 100vh;
    background-color: ${theme.colors.white};
  `
);

export const PaddedContainer = styled.div(
  ({ theme }) => css`
    width: 100%;
    height: 100%;
    padding: 0;

    @media (min-width: ${theme.breakpoints.large}px) {
      padding: 10vh 0.75rem;
    }
  `
);

export const FieldsWrapper = styled.div`
  max-width: 360px;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  width: 100%;
  display: flex;
  margin: 0px auto;
`;

export const LogoWrapper = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
`;

export const CreateAccountLink = styled.div`
  font-size: 0.875rem;
  padding: 1rem 0.5rem;
  color: ${(props) => props.theme.colors.gray50};
`;

export const CreateAccountWrapper = styled.div`
  padding: 1rem;
  display: flex;
  text-align: center;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}px) {
    justify-content: unset;
    padding: 1rem;
  }
`;

export const ForgotPassword = styled.a`
  margin-top: 0.75rem;
  text-align: center;
  font-size: 0.875rem;
  font-family: "gilroybold";
  color: ${(props) => props.theme.colors.gray50};
  text-decoration: none;
  transition: background-color 0.3s ease 0s, color 0.3s ease 0s;
  cursor: pointer;
`;
