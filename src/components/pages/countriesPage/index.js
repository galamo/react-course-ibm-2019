import React from "react";
import axios from "axios";
//Components
import Header from "../../ui-components/header";
import CountriesList from "./countriesList";
import Filters from "./filters";
import { withLoading } from "../../hoc/withLoading.js";
import axiosinstance from "../../../axios.middleware";
export default class CountrisPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: null,
      filters: { countryName: null, region: null }
    };

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
      const { data: countries } = await axiosinstance.get("/all");
      this.setState({ countries });
    } catch (ex) {
      this.setState({ countries: [] });
      console.log(ex.message);
    }
  };

  // const name = "search"
  // { name : ""}
  // { search : ""}

  onChangeInput = event => {
    const { name, value } = event.target;
    this.setState(prevState => {
      return { ...prevState, filters: { ...prevState.filters, [name]: value } };
    });
  };

  filterCountries = () => {
    const { filters, countries } = this.state;
    const { countryName, region } = filters;
    if ((!countryName && !region) || !countries) return countries;
    const countryNameLower = countryName && countryName.toLowerCase();
    const regionNameLower = region && region.toLowerCase();
    return countries.filter(country => {
      const isCountryName = countryName
        ? country.name.toLowerCase().includes(countryNameLower)
        : true;
      const isRegionyName = region
        ? country.region.toLowerCase().includes(regionNameLower)
        : true;
      return isRegionyName && isCountryName;
    });
  };
  render() {
    const filteredCountries = this.filterCountries();
    const CountriesWithLoading = withLoading(filteredCountries)(CountriesList);
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
          <Filters onChangeInput={this.onChangeInput} />
        </div>
        <div className="row">
          <CountriesWithLoading data={filteredCountries} />
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
