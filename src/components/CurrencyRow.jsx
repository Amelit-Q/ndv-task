import React from "react";

export const CurrencyRow = ({
  currencyOptions,
  selectedCurrency,
  onChangeCurrency,
  amount,
  onChangeAmount,
}) => {
  // console.log(currencyOptions, "props in Currency row");
  return (
    <>
      <input type="number" className="input" value={amount} onChange={onChangeAmount} />
      <select value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOptions.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </>
  );
};
