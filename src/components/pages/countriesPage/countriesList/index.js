import React from "react";

export default function(props) {
  const { data } = props;
  if (!Array.isArray(data)) return <h1> No Countries for you!</h1>;
  return data.map(country => {
    return <h1>{country.name}</h1>;
  });
}
