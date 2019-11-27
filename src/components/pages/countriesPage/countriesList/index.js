import React from "react";
import Country from "../country";

export default function(props) {
  const { data } = props;
  if (!Array.isArray(data))
    return (
      <h1 style={{ display: "block", textAlign: "center" }}>
        No Countries for you!
      </h1>
    );
  return data.map(country => {
    return <Country key={country.alpha3Code} {...country} />;
  });
}

// props : { name:"israel", flag:"https://"  }
//props : { country: { name:"israel", flag:"https://"  } }
