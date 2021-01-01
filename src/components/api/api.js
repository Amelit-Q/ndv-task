import axios from "axios";

const key = process.env.REACT_APP_API_KEY;

const instance = axios.create({
  baseURL: "https://currate.ru/api/",
});

export const getAllCurrencyPairs = (key) => (dispatch) => {
  instance.get(`?get=currency_list&key=${key}`).then((response) => {
    console.log(response.data);
  });
};
