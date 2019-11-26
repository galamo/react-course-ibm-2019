import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/ui-components/header";
import TrusteerNavbar from "./components/ui-components/navbar";
import data from "./data/countries.json";
function App() {
  console.log(data);
  return (
    <div className="App">
      <div className="container">
        <TrusteerNavbar />
      </div>
    </div>
  );
}

export default App;
