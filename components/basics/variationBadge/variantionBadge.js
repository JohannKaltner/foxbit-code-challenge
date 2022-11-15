import React from "react";
import { smallFractionFormat } from "../../../lib";
import { fallbackSkeleton } from "../../cryptoList/cryptoListItem/cryptoListItem";
import { ChevronUp } from "../icons";
import { ChevronDown } from "../icons/chevronDown";
import * as Styled from "./styles/variationBadge.styles";
export function VariantionBadge({ variation }) {
  // const negativeCheckRegex = /^\-.*$/;

  const isVariationPositive = variation > 1;

  const icon = isVariationPositive ? <ChevronUp /> : <ChevronDown />;

  return (
    <Styled.VariationBadgeContainer isVariationPositive={isVariationPositive}>
      <Styled.BadgeText isVariationPositive={isVariationPositive}>
        {variation ? icon : null}
        {variation ? smallFractionFormat(variation) : fallbackSkeleton}%
      </Styled.BadgeText>
    </Styled.VariationBadgeContainer>
  );
}
