import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import { CurrencyRates } from "./pages/CurrencyRates";
import { Main } from "./pages/Main";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/currencyRates" component={CurrencyRates} />
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
