import React from "react";
import "./App.css";
import TrusteerNavbar from "./components/ui-components/navbar";
// import data from "./data/countries.json";
// import CountrisPage from "./components/pages/countriesPage";
// import HomePage from "./components/pages/homePage";
// import LoginPage from "./components/pages/loginPage";
import AppRouter from "./components/appRouter";
import { routes } from "./components/appRouter/route.config";
import { BrowserRouter, Route, Switch, HashRouter } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";

function App() {
  console.log("this page is refreshed");
  return (
    <div className="App">
      <div className="container">
        <HashRouter>
          <TrusteerNavbar />
          <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className="switch-wrapper"
          >
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
            {/* import { AnimatedSwitch } from 'react-router-transition'; */}
          </AnimatedSwitch>
        </HashRouter>
      </div>
    </div>
  );
}

export default App;
