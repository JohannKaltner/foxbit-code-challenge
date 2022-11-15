import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { ConnectedCryptoList } from "../components";

import { LoginPage } from "../components/loginPage/loginPage";
import { theme } from "../lib";
import * as Styled from "./styles";
export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Head>
          <title>Foxbit - Frontend Challenge</title>
          <meta name='description' content='Foxbit frontend challenge' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Styled.GlobalOverrides />
        <div
          style={{
            overflowX: "hidden",
            width: "100%",
          }}
        >
          <Styled.Container>
            <ConnectedCryptoList />
            <LoginPage />
          </Styled.Container>
        </div>
      </div>
    </ThemeProvider>
  );
}
