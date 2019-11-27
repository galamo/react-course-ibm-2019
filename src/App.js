import React from "react";
import "./App.css";
import TrusteerNavbar from "./components/ui-components/navbar";
// import data from "./data/countries.json";
// import CountrisPage from "./components/pages/countriesPage";
// import HomePage from "./components/pages/homePage";
// import LoginPage from "./components/pages/loginPage";
import AppRouter from "./components/appRouter";
import { routes } from "./components/appRouter/route.config";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  console.log("this page is refreshed");
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <TrusteerNavbar />
          <Switch>
            <AppRouter routes={routes} />
            {/* <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/countries" component={CountrisPage} />
            <Route
              exact
              path="*"
              component={() => {
                return <h1> not found </h1>;
              }}
            /> */}
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
