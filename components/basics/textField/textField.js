import React from "react";
import * as Styled from "./styles/textField.styles.js";

export function TextField({ name, label, args, icon }) {
  return (
    <Styled.FieldWrapper>
      <Styled.TextFieldIcon>{icon}</Styled.TextFieldIcon>
      <Styled.Field {...args} name={name} />
      <Styled.Label htmlFor={name}>{label}</Styled.Label>
    </Styled.FieldWrapper>
  );
}
