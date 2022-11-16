import React, { useCallback, useEffect, useState } from "react";
import {
  convertToIntlFormat,
  defaultCurrencyUrl,
  imageRepositoryUrl,
  smallFractionFormat,
} from "../../../lib";
import { VariantionBadge } from "../../basics";
import * as Styled from "./cryptoListItem.styles";

export const fallbackSkeleton = "--";

export function CryptoListItem({
  Symbol = "--",
  Product1Symbol,
  LastTradedPx = 0,
  Rolling24HrPxChange = 0,
  Rolling24HrVolume = 0,
}) {
  const imageUrl = LastTradedPx
    ? `${imageRepositoryUrl}${Product1Symbol.toLowerCase()}`
    : defaultCurrencyUrl;

  const [price, setPrice] = useState(0);

  const updateCryptoPrice = useCallback(() => {
    const formattedPrice = LastTradedPx
      ? convertToIntlFormat(LastTradedPx)
      : null;

    if (!formattedPrice?.length) return;

    setPrice(formattedPrice);
  }, [LastTradedPx]);

  useEffect(() => {
    updateCryptoPrice();
  }, [updateCryptoPrice]);

  return (
    <Styled.CryptoListItemWrapper data-cy='crypto-item'>
      <Styled.Section>
        <img src={`${imageUrl}.svg`} alt={Symbol} width='28px' height='28px' />
        <VariantionBadge variation={Rolling24HrPxChange} />
      </Styled.Section>
      <Styled.Section data-cy='crypto-item-symbol'>{Symbol}</Styled.Section>
      <Styled.Section>
        <Styled.PriceText>
          <Styled.Currency>R$</Styled.Currency>
          {price ? price : "Loading..."}
        </Styled.PriceText>
      </Styled.Section>
      <Styled.VolumeContainer>
        <Styled.VolumeIndicator>Volume (24h):</Styled.VolumeIndicator>
        <Styled.VolumeText data-cy='crypto-item-volume'>
          {Rolling24HrVolume
            ? smallFractionFormat(Rolling24HrVolume)
            : fallbackSkeleton}
          &nbsp;{Product1Symbol ? Product1Symbol : fallbackSkeleton}
        </Styled.VolumeText>
      </Styled.VolumeContainer>
    </Styled.CryptoListItemWrapper>
  );
}
