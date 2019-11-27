import React, { useEffect, useState } from "react";
import axios from "axios";
import Country from "../countriesPage/country";

export default function Coutnry(props) {
  const [{ country }, setCountry] = useState({ country: {} });

  useEffect(async () => {
    const { data } = await axios.get(
      "https://restcountries.eu/rest/v2/alpha/" + "isr"
    );
    console.log(data);
    setCountry({ country: data });
  }, []);

  console.log(country);

  return <Country {...country} />;
}
