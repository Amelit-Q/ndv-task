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

  React.useEffect(() => {
    const veryFirstCurrency = Object.keys(currencyList)[0];
    // console.log(veryFirstCurrency, "console.log in useEffect");
    dispatch(getAllCurrencyPairs());
    setCurrencyOptions([baseCurrency, ...Object.keys(currencyList)]);
    setToCurrency(baseCurrency);
    setToCurrency(veryFirstCurrency);
  }, []);

  // fetch("https://currate.ru/api/?get=currency_list&key=50760f5e6b3f00f794bcefc26bcb822b").then(
  //   (response) => {
  //     console.log(response);
  //   },
  // );

  console.log(currencyOptions, "currency options before render");

  return (
    <div>
      <CurrencyRow currencyOptions={currencyOptions} selectCurrency={fromCurrency} />
      <div>=</div>
      <CurrencyRow currencyOptions={currencyOptions} selectCurrency={toCurrency} />
    </div>
  );
};
