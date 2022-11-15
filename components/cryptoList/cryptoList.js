import React from "react";
import * as Styled from "./styles/cryptoList.styles";
import { CryptoListItem } from "./cryptoListItem";
import { cryptoListStatuses } from "./connectedCryptoList";

export function CryptoList({
  instruments,
  status,
  instrumentsPriceForIndexes = [],
}) {
  return (
    <Styled.CryptoListWrapper>
      {status === cryptoListStatuses.loading
        ? Array(50)
            .fill("")
            .map((_, index) => {
              return <CryptoListItem key={index} />;
            })
        : null}

      {status === cryptoListStatuses.ready
        ? instruments?.map((item, index) => {
            const prices = instrumentsPriceForIndexes?.find(
              (instrument) => instrument.InstrumentId === item.InstrumentId
            );
            if (!item.InstrumentId && !prices) return;

            const dynamicProps = { ...item, ...prices };
            return <CryptoListItem {...dynamicProps} key={item.InstrumentId} />;
          })
        : null}
    </Styled.CryptoListWrapper>
  );
}
