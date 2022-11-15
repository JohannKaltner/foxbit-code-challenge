import React, { useState } from "react";
import { CryptoList } from "./cryptoList";
import { useWebSocket } from "../../lib/";

export const cryptoListStatuses = {
  loading: "loading",
  ready: "ready",
};

const channels = {
  getInstruments: "GetInstruments",
  subscribe: "SubscribeLevel1",
  update: "Level1UpdateEvent",
};

export function ConnectedCryptoList() {
  const [status, setStatus] = useState(cryptoListStatuses.loading);

  const [instruments, setInstruments] = useState([]);

  const [instrumentsPriceForIndexes, setInstrumentsPriceForIndexes] = useState(
    []
  );

  /**
   *  loop through GetInstruments return and subscribe to each one of them
   * */
  function subscribeToInstruments(data, ws) {
    data.forEach((instrument) => {
      const payload = {
        m: 0,
        i: 2,
        n: "SubscribeLevel1",
        o: JSON.stringify({ InstrumentId: instrument.InstrumentId }),
      };
      setInstruments((prevState) => [...prevState, instrument]);

      ws.send(JSON.stringify(payload));
    });
  }

  /**
   *  trigger the subscription for each crypto returned by GetInstruments
   *  and initiates the list display
   * */
  function handleGetInstruments(data, ws) {
    subscribeToInstruments(data, ws);
    setStatus(cryptoListStatuses.ready);
  }

  /**
   * Store prices for each Crypto returned by SubscribeLevel1
   * */
  function handleSubscribeEvent(data) {
    setInstrumentsPriceForIndexes((prevState) => [...prevState, data]);
  }

  /**
   * Update the prices for each Crypto returned by Level1UpdateEvent
   * */
  function updateInstrumentPrice(updateResultEvent) {
    setInstrumentsPriceForIndexes((prevState) => [
      ...prevState.filter(
        (storedInstruments) =>
          storedInstruments.InstrumentId !== updateResultEvent.InstrumentId
      ),
      updateResultEvent,
    ]);

    return;
  }

  function onOpen(ws) {
    const payloadInstruments = {
      m: 0,
      i: 2,
      n: "GetInstruments",
      o: JSON.stringify({ OMSID: 1 }),
    };

    ws.send(JSON.stringify(payloadInstruments));
  }

  function onMessage(evt, ws) {
    const { n: channel, o } = JSON.parse(evt.data);

    const data = JSON.parse(o);

    switch (channel) {
      case channels.getInstruments: {
        handleGetInstruments(data, ws);
        return;
      }

      case channels.subscribe: {
        handleSubscribeEvent(data);
        return;
      }

      case channels.update: {
        updateInstrumentPrice(data);
        return;
      }
    }
  }

  function handleOnClose() {
    setInstruments([]);
    setInstrumentsPriceForIndexes([]);
    console.log("disconnected");
  }

  useWebSocket({
    config: {
      url: "wss://api.foxbit.com.br/",
    },
    onOpen,
    onMessage,
    onClose: () => handleOnClose(),
  });

  return (
    <CryptoList
      instrumentsPriceForIndexes={instrumentsPriceForIndexes}
      instruments={instruments}
      status={status}
    />
  );
}
