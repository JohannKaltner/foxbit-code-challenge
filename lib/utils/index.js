const defaultOptions = {
  currency: "BRL",
  minimumFractionDigits: 4,
  maximumFractionDigits: 9,
};

const twoFractionsOption = {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
};

const formatter = (options = defaultOptions) =>
  new Intl.NumberFormat("pt-BR", options);

export const smallFractionFormat = (value) =>
  formatter(twoFractionsOption).format(value);

export const convertToIntlFormat = (value) =>
  formatter(defaultOptions).format(value);
