import axios from "axios";
import React from "react";

export const CurrencyRates = () => {
  //   const [getAllCurrencyRatesValues, setAllCurrencyRateValues] = React.useState([]);
  //   const [getAllCurrencyRatesKeys, setAllCurrencyRateKeys] = React.useState([]);
  //   console.log(getAllCurrencyRatesValues);
  //   console.log(getAllCurrencyRatesKeys);
  React.useEffect(() => {
    axios.get("https://api.exchangeratesapi.io/latest").then(({ data }) => {
      //   console.log(data.rates);
      //   setAllCurrencyRates(Object.values(data.rates));
      //   setAllCurrencyRateValues([...Object.values(data.rates)]);
      //   setAllCurrencyRateKeys([...Object.keys(data.rates)]);
      //   setAllCurrencyRates(Object.values(data.rates), ...Object.values(data.keys));
      const currencyList = data.rates;
      console.log(currencyList);
    });
  }, []);
  return <div>{}</div>;
};
