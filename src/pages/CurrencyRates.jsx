import axios from "axios";
import React from "react";

export const CurrencyRates = () => {
  const [getAllCurrencyRatesValues, setAllCurrencyRateValues] = React.useState([]);
  const [getAllCurrencyRatesKeys, setAllCurrencyRateKeys] = React.useState([]);
  const [displayBaseCurrency, setDisplayBaseCurrency] = React.useState();
  const [toCurrency, setToCurrency] = React.useState();
  const baseCurrency = "";

  React.useEffect(() => {
    axios
      .get(`https://api.exchangeratesapi.io/latest?base=${toCurrency ? toCurrency : "RUB"}`)
      .then(({ data }) => {
        setAllCurrencyRateValues([...Object.values(data.rates)]);
        setAllCurrencyRateKeys([...Object.keys(data.rates)]);
        const currencyList = data.rates;
        setDisplayBaseCurrency(data.base);
        console.log(data);
      });
  }, [toCurrency]);

  return (
    <div className="Currency-rates-page">
      <div>
        {
          <ul>
            {getAllCurrencyRatesValues.map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        }
      </div>
      <div>
        <ul>
          {getAllCurrencyRatesKeys.map((value) => (
            <li key={value}>{value}</li>
          ))}
        </ul>
      </div>
      <div>
        <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
          {getAllCurrencyRatesKeys.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
