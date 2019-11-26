import React from "react";
import axios from "axios";
//Components
import Header from "../../ui-components/header";
import CountriesList from "./countriesList";
//data
import data from "../../../data/countries.json";

export default class CountrisPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { countries: [] };
  }

  async componentDidMount() {
    console.log("componentDidMount");
    try {
      const { data: countries } = await axios.get(
        "https://restcountries.eu/rest/v2/all"
      );
      this.setState({ countries });
    } catch (ex) {
      console.log(ex.message);
    }
  }

  deleteCountries = () => {
    console.log("button clicked!!!");
  };

  render() {
    console.log("is it render ?");
    return (
      <div>
        <Header value="Countries Page" />
        <button className="btn btn-danger" onClick={this.deleteCountries}>
          {" "}
          delete countries{" "}
        </button>
        <div className="row">
          <CountriesList data={this.state.countries} />
        </div>
      </div>
    );
  }
}
