import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/ui-components/header";
import TrusteerNavbar from "./components/ui-components/navbar";
import data from "./data/countries.json";
import CountrisPage from "./components/pages/countriesPage";
import HomePage from "./components/pages/home";
import LoginPage from "./components/pages/loginPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
const routes = [
  { path: "/", component: HomePage, title: "home", exact: true },
  {
    path: "/countries",
    component: CountrisPage,
    title: "countreis",
    exact: true
  },
  { path: "/login", component: LoginPage, title: "login", exact: true }
];

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
            <GetRoutes routes={routes} />

            <Route path="**" component={() => <h1> Not Found! </h1>} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

function GetRoutes({ routes }) {
  return routes.map(route => {
    return <Route {...route} />;
  });
}
