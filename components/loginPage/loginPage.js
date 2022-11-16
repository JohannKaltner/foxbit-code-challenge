import React from "react";
import { TextField } from "../basics/textField/textField";
import * as Styled from "./styles/loginPage.styles";
import { Title } from "../title";
import Image from "next/image";
import { Button, ButtonLink, Mail, Key } from "../basics";
export function LoginPage() {
  return (
    <Styled.LoginPageWrapper>
      <Styled.PaddedContainer>
        <form>
          <Styled.FieldsWrapper>
            <Styled.LogoWrapper>
              <Image
                width={120}
                height={40}
                src='https://foxbit.com.br/wp-content/uploads/2022/01/logo-foxbit.png'
              />
            </Styled.LogoWrapper>
            <Title>Acesse sua conta</Title>
            <TextField name='email' label='E-mail' icon={<Mail />} />
            <TextField name='password' label='Senha' icon={<Key />} />
            <Button text='Entrar' />
            <Styled.ForgotPassword>Esqueceu a senha?</Styled.ForgotPassword>
            <Styled.CreateAccountWrapper>
              <Styled.CreateAccountLink>
                Ainda não tem conta?
              </Styled.CreateAccountLink>
              <ButtonLink>Cadastre-se</ButtonLink>
            </Styled.CreateAccountWrapper>
          </Styled.FieldsWrapper>
        </form>
      </Styled.PaddedContainer>
    </Styled.LoginPageWrapper>
  );
}
