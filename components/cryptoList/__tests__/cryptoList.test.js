import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CryptoList } from "../cryptoList";
import { ThemeProvider } from "styled-components";
import { convertToIntlFormat, smallFractionFormat, theme } from "../../../lib";
import { cryptoListStatuses } from "../connectedCryptoList";

const mockedCurrency = [
  {
    InstrumentId: 1,
    Symbol: "BTC/BRL",
    Product1Symbol: "BTC",

    LastTradedPx: 88608.11,
    Rolling24HrPxChange: 2.7332,
    Rolling24HrVolume: 15.7622,
  },
];

const prices = [
  {
    InstrumentId: 1,
    LastTradedPx: 88608.11,
    Rolling24HrPxChange: 2.7332,
    Rolling24HrVolume: 15.7622,
  },
];

function renderCryptoList(
  args = {
    status: cryptoListStatuses.ready,
    instruments: mockedCurrency,
    instrumentsPriceForIndexes: prices,
  }
) {
  return render(
    <ThemeProvider theme={theme}>
      <CryptoList {...args} />
    </ThemeProvider>
  );
}

describe("Home", () => {
  it("should show skeleton before loading data", () => {
    renderCryptoList({ status: cryptoListStatuses.loading });

    const loadingIndicator = screen.getAllByText("Loading...");
    expect(loadingIndicator.length).toEqual(50);
    expect(loadingIndicator[0]).toBeInTheDocument();
  });

  it("should render a crypto list item with all it's values", () => {
    renderCryptoList();
    const cryptoSymbol = screen.getByText(mockedCurrency[0].Symbol);
    const cryptoPrice = screen.getByText(
      convertToIntlFormat(prices[0].LastTradedPx)
    );

    const twentyFourHourVolume = screen.getByText(
      `${smallFractionFormat(prices[0].Rolling24HrVolume)} ${
        mockedCurrency[0].Product1Symbol
      }`
    );
    const cryptoVariation = screen.getByText(
      `${smallFractionFormat(prices[0].Rolling24HrPxChange)}%`
    );

    expect(cryptoVariation).toBeInTheDocument();
    expect(cryptoSymbol).toBeInTheDocument();
    expect(cryptoPrice).toBeInTheDocument();
    expect(twentyFourHourVolume).toBeInTheDocument();
  });
});
