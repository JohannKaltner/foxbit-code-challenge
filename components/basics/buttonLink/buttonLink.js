import React from "react";
import * as Styled from "./styles/buttonLink.styles";

export function ButtonLink({ children }) {
  return <Styled.ButtonLinkBase>{children}</Styled.ButtonLinkBase>;
}
