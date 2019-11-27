import React, { useEffect, useState } from "react";
import axios from "axios";
import Country from "../countriesPage/country";
import { useDispatch } from "react-redux";
import { setFavorites } from "../../../redux/actions.obj";

export default function CountryPage(props) {
  const { params } = props.match;

  const [country, setCountry] = useState({});
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    async function getCountry() {
      const { code } = params;
      const { data } = await axios.get(
        `https://restcountries.eu/rest/v2/alpha/${code}`
      );
      setCountry(data);
    }
    getCountry();
  }, []);

  useEffect(() => {
    console.log("counter has changed");
  }, [counter]);
  useEffect(() => {
    console.log("counter2 has changed");
  }, [counter2, counter]);

  return (
    <div>
      <button
        className="btn btn-success"
        onClick={() => {
          setCounter2(counter2 + 1);
        }}
      >
        counter 1
      </button>
      <button
        className="btn btn-success"
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        counter 2
      </button>
      <Country
        {...country}
        addToFavorite={() => {
          dispatch(setFavorites(country));
        }}
      />
    </div>
  );
}
