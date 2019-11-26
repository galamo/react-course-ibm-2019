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

    // this.deleteCountries = this.deleteCountries.bind(this)
  }

  async componentDidMount() {
    this.getCountries();
  }

  deleteCountries = () => {
    this.setState({ countries: [] });
  };

  getCountries = async () => {
    try {
      const { data: countries } = await axios.get(
        "https://restcountries.eu/rest/v2/all"
      );
      this.setState({ countries });
    } catch (ex) {
      console.log(ex.message);
    }
  };

  render() {
    console.log("is it render ?");
    return (
      <div>
        <Header value="Countries Page" />
        <button className="btn btn-danger" onClick={this.deleteCountries}>
          delete countries
        </button>
        <button className="btn btn-success" onClick={this.getCountries}>
          get countries
        </button>
        <div className="row">
          <CountriesList data={this.state.countries} />
        </div>
      </div>
    );
  }
}

// const car = {
//   lp: 12345,
//   getLp: function() {
//     return this.lp;
//   }
// };

// const car2 = {
//   lp: 12345,
//   getLp: () => {
//     return this.lp;
//   }
// };
