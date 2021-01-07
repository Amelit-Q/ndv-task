import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCurrencyPairs } from "../components/api/api";
import { CurrencyRow } from "../components/CurrencyRow";

export const Main = () => {
  // const key = process.env.REACT_APP_API_KEY;

  const dispatch = useDispatch();
  const currencyList = useSelector((state) => state.currencyList.rates);
  const baseCurrency = useSelector((state) => state.currencyList.base);

  const [currencyOptions, setCurrencyOptions] = React.useState([]);
  const [fromCurrency, setFromCurrency] = React.useState();
  const [toCurrency, setToCurrency] = React.useState();
  const [amount, setAmount] = React.useState(1);
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
    const veryFirstCurrency = Object.keys(currencyList)[0];
    // console.log(veryFirstCurrency, "console.log in useEffect");
    dispatch(getAllCurrencyPairs(dispatch));
    // getAllCurrencyPairs(dispatch);
    setCurrencyOptions([baseCurrency, ...Object.keys(currencyList)]);
    setFromCurrency(baseCurrency);
    setToCurrency(veryFirstCurrency);
    setExchangeRate(currencyList[veryFirstCurrency]);
  }, [dispatch]);

  React.useEffect(() => {
    if (fromCurrency !== null && toCurrency !== null) {
      axios
        .get(`https://api.exchangeratesapi.io/latest?base=${fromCurrency}&symbols=${toCurrency}`)
        .then((response) => {
          console.log(response.data, "response data in second useEffect");
        });
    }
  }, [fromCurrency, toCurrency]);

  // fetch("https://currate.ru/api/?get=currency_list&key=50760f5e6b3f00f794bcefc26bcb822b").then(
  //   (response) => {
  //     console.log(response);
  //   },
  // );

  // console.log(currencyOptions, "currency options before render");

  const handleFromChangeAmount = (e) => {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  };

  const handleToChangeAmount = (e) => {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  };

  return (
    <div>
      <CurrencyRow
        currencyOptions={currencyOptions}
        selectedCurrency={fromCurrency}
        onChangeCurrency={(e) => setFromCurrency(e.target.value)}
        amount={fromAmount}
        onChangeAmount={handleFromChangeAmount}
      />
      <div>=</div>
      <CurrencyRow
        currencyOptions={currencyOptions}
        selectedCurrency={toCurrency}
        onChangeCurrency={(e) => setToCurrency(e.target.value)}
        amount={toAmount}
        onChangeAmount={handleToChangeAmount}
      />
    </div>
  );
};
