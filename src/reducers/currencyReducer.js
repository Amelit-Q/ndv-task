const SET_CURRENCY_LIST = "SET_CURRENCY_LIST";

const defaultState = {
  rates: {},
  base: "",
  date: "",
  // perPage: 10,
  // totalCount: 0,
};

export default function currencyReducer(state = defaultState, action) {
  if (action.type === SET_CURRENCY_LIST) {
    return {
      ...state,
      rates: action.payload.rates,
      date: action.payload.date,
      base: action.payload.base,
    };
  }
  return state;
}

export const setCurrencyList = (currencyRates) => ({
  type: SET_CURRENCY_LIST,
  payload: currencyRates,
});
