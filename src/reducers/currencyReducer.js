const SET_CURRENCY_LIST = "SET_CURRENCY_LIST";

const defaultState = {
  items: [],
  isFetching: true,
  currentPage: 1,
  perPage: 10,
  totalCount: 0,
};

export default function currencyReducer(state = defaultState, action) {
  if (action.type === SET_CURRENCY_LIST) {
    return {
      ...state,
      items: action.payload.items,
    };
  }
  return state;
}

export const setCurrencyList = (currencyList) => ({
  type: SET_CURRENCY_LIST,
  payload: currencyList,
});
