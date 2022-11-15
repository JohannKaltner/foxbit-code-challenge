import React from "react";
import { BaseButton } from "./styles/button.styles";

export function Button({ text, ...args }) {
  return <BaseButton {...args}> {text}</BaseButton>;
}
