import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import currencyReducer from "./currencyReducer";

const rootReducer = combineReducers({
  currencyList: currencyReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
