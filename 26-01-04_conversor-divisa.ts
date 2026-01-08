const FOREIGN_EXCHANGE_RATIO = {
  EUR: 0.92,
  GBP: 0.79,
  JPY: 150,
};

type Currency = keyof typeof FOREIGN_EXCHANGE_RATIO;

function foreignExchangeConverter(currency: Currency, number: number): number {
  const conversion: number = number / FOREIGN_EXCHANGE_RATIO[currency];
  return parseFloat(conversion.toFixed(2));
}

foreignExchangeConverter("EUR", 3);
foreignExchangeConverter("GBP", 3);
foreignExchangeConverter("JPY", 3);
