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
        <div className="row">
          <CountriesList data={data} />
        </div>
      </div>
    );
  }
}
