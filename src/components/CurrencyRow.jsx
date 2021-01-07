import React from "react";

export const CurrencyRow = ({ currencyOptions }) => {
  // console.log(currencyOptions, "props in Currency row");
  return (
    <>
      <input type="number" className="input" />
      <select>
        {currencyOptions.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </>
  );
};
