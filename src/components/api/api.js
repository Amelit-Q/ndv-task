import axios from "axios";
import { setCurrencyList } from "../../reducers/currencyReducer";

const instance = axios.create({
  baseURL: "https://api.exchangeratesapi.io",
});

// export const getAllCurrencyPairs = (key) => (dispatch) => {
//   instance.get(`?get=currency_list&key=${key}`).then((response) => {
//     dispatch(setCurrencyList(response.data));
//     console.log(response.data);
//   });
// };

// export const getAllCurrencyPairs = () => {
//   return async (dispatch) => {
//     await instance.get("/latest").then((response) => {
//       // console.log(response.status)
//       // console.log(response);
//       console.log(response.data.rates);
//       dispatch(setCurrencyList(response.data));
//     });
//   };
// };

export const getAllCurrencyPairs = () => (dispatch) => {
  instance.get("/latest").then((response) => {
    // console.log(response.status)
    // console.log(response);
    console.log(response.data.rates);
    dispatch(setCurrencyList(response.data));
  });
};

// export const
