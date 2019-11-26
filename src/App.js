import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/ui-components/header";

function App() {
  return (
    <div className="App">
      <Header value="Flights Application" />
      <Header value="Countries Application" color="red" />
      <Header />
    </div>
  );
}

export default App;
