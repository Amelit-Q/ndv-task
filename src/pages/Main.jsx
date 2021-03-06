import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { getAllCurrencyPairs } from "../components/api/api";
import { CurrencyRow } from "../components/CurrencyRow";

export const Main = () => {
  // const key = process.env.REACT_APP_API_KEY;
  // const instance = axios.create({
  //   baseURL: "https://api.exchangeratesapi.io",
  // });

  const BASE_URL = "https://api.exchangeratesapi.io/latest";

  // const dispatch = useDispatch();
  // const currencyList = useSelector((state) => state.currencyList.rates);
  // const baseCurrency = useSelector((state) => state.currencyList.base);

  const [currencyOptions, setCurrencyOptions] = React.useState([]);
  const [fromCurrency, setFromCurrency] = React.useState();
  const [toCurrency, setToCurrency] = React.useState();
  const [amount, setAmount] = React.useState();
  const [amountInFromCurrency, setAmountInFromCurrency] = React.useState(true);
  const [exchangeRate, setExchangeRate] = React.useState();
  console.log(exchangeRate, "set exchange rate");

  let toAmount, fromAmount;

  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  React.useEffect(() => {
    axios.get(BASE_URL).then(({ data }) => {
      const firstCurrency = Object.keys(data.rates)[0];
      setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
      setFromCurrency(data.base);
      setToCurrency(firstCurrency);
      setExchangeRate(data.rates[firstCurrency]);
    });
  }, []);

  React.useEffect(() => {
    if (fromCurrency && toCurrency) {
      axios
        .get(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
        .then(({ data }) => setExchangeRate(data.rates[toCurrency]));
    }
  }, [fromCurrency, toCurrency]);

  const handleFromChangeAmount = (e) => {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  };

  const handleToChangeAmount = (e) => {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  };

  return (
    <div className="Currency-rows">
      <CurrencyRow
        currencyOptions={currencyOptions}
        selectedCurrency={fromCurrency}
        onChangeCurrency={(e) => setFromCurrency(e.target.value)}
        amount={fromAmount}
        onChangeAmount={handleFromChangeAmount}
      />
      <div> = </div>
      <CurrencyRow
        currencyOptions={currencyOptions}
        selectedCurrency={toCurrency}
        onChangeCurrency={(e) => setToCurrency(e.target.value)}
        amount={toAmount}
        onChangeAmount={handleToChangeAmount}
      />
      <Link to="/currencyRates">Currency Rates Page</Link>
    </div>
  );
};
