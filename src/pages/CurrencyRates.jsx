import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

export const CurrencyRates = () => {
  const [getAllCurrencyRatesValues, setAllCurrencyRateValues] = React.useState([]);
  const [getAllCurrencyRatesKeys, setAllCurrencyRateKeys] = React.useState([]);
  const [displayBaseCurrency, setDisplayBaseCurrency] = React.useState();
  const [toCurrency, setToCurrency] = React.useState();
  const baseOne = "";
  // console.log(baseOne ===)

  React.useEffect(() => {
    // if (localStorage.getItem("baseCurrency") !== undefined) {
    axios
      .get(
        `https://api.exchangeratesapi.io/latest?base=${
          localStorage.getItem("baseCurrency") ? localStorage.getItem("baseCurrency") : "RUB"
        }`,
      )
      .then(({ data }) => {
        setAllCurrencyRateValues([...Object.values(data.rates)]);
        setAllCurrencyRateKeys([...Object.keys(data.rates)]);
        const currencyList = data.rates;
        setDisplayBaseCurrency(data.base);
        // console.log(data);
      });
    // }
  }, [toCurrency]);

  // console.log(localStorage.getItem("baseCurrency"));
  // console.log(toCurrency);

  const handleSelectChange = (e) => {
    e.preventDefault();
    setToCurrency(e.target.value);
    localStorage.setItem("baseCurrency", e.target.value);
  };

  return (
    <div className="Currency-rates-page">
      <Link to="/">Back to Currency Calculator</Link>
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
        <select value={toCurrency} onChange={handleSelectChange}>
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
