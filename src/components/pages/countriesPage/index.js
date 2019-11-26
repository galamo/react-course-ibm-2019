import React from "react";
import axios from "axios";
//Components
import Header from "../../ui-components/header";
import CountriesList from "./countriesList";
//data
import Filters from "./filters";
export default class CountrisPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      filters: { name: null, region: null, borders: false }
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
  onChangeInput = e => {
    const { name, value } = e.target;
    this.setState((prevState, props) => {
      return {
        ...prevState,
        filters: { ...prevState.filters, [name]: value }
      };
    });
  };
  getFilteredCountries = () => {
    const { filters } = this.state;
    const { name, region, borders } = filters;
    console.log(borders, "borders");
    if (!name && !region && !borders) return this.state.countries;
    return this.state.countries.filter(country => {
      const nameCondition = name
        ? country.name.toLowerCase().includes(name.toLowerCase())
        : true;
      const regionCondition = region
        ? country.region.toLowerCase().includes(region.toLowerCase())
        : true;
      const bordersCondition = this.hasBorders(borders, country);
      return nameCondition && regionCondition && bordersCondition;
    });
  };

  hasBorders = (borders, country) => {
    if (country.name === "Monaco") {
      console.log(country);
    }
    if (borders) {
      if (country.borders && country.borders.length > 0) return true;
      return false;
    } else {
      return true;
    }
  };

  render() {
    const filteredCountries = this.getFilteredCountries();
    return (
      <div>
        <Header value="Countries Page" />
        <Filters onChangeInput={this.onChangeInput} />
        <button className="btn btn-danger" onClick={this.deleteCountries}>
          delete countries
        </button>
        <button className="btn btn-success" onClick={this.getCountries}>
          get countries
        </button>
        <div className="row">
          <CountriesList data={filteredCountries} />
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
