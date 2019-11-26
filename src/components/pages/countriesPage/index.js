import React from "react";
import Header from "../../ui-components/header";
import data from "../../../data/countries.json";

export default class CountrisPage extends React.Component {
  render() {
    return (
      <div>
        <Header value="Countries Page" />
        {data.map(country => (
          <h1>{country.name}</h1>
        ))}
      </div>
    );
  }
}
