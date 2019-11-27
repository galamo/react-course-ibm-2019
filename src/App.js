import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/ui-components/header";
import TrusteerNavbar from "./components/ui-components/navbar";
import data from "./data/countries.json";
import CountrisPage from "./components/pages/countriesPage";
import HomePage from "./components/pages/home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  console.log(data);
  return (
    <div className="App">
      <div className="container">
        {/* <CountrisPage />
        <HomePage /> */}
        <BrowserRouter>
          <TrusteerNavbar />
          <Switch>
            <Route path="/" component={HomePage} />
            <Route path="/c" component={CountrisPage} />
            <Route path="**" component={() => <h1> Not Found! </h1>} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
