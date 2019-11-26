import React from "react";

//Components
import Header from "../../ui-components/header";
import CountriesList from "./countriesList";
//data
import data from "../../../data/countries.json";

export default class CountrisPage extends React.Component {
  render() {
    return (
      <div>
        <Header value="Countries Page" />
        <CountriesList data={data} />
      </div>
    );
  }
}
