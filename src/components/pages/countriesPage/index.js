import React from "react";
import axios from "axios";
//Components
import Header from "../../ui-components/header";
import CountriesList from "./countriesList";
import Filters from "./filters";
import { withLoading } from "../../hoc/withLoading.js";
export default class CountrisPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
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
      const { data: countries } = await axios.get(
        "https://restcountries.eu/rest/v2/all"
      );
      this.setState({ countries });
    } catch (ex) {
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
    if (!countryName && !region) return countries;
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
    const CountriesWithLoading = withLoading(filteredCountries.length)(
      CountriesList
    );
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
