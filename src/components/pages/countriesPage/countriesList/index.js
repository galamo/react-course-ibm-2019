import React from "react";
import Country from "../country";
export default function(props) {
  const { data } = props;
 
  if (!Array.isArray(data)) return <h1> No Countries for you!</h1>;
  return data.map(country => {
    return <Country {...country} />;
  });
}

// props : { name:"israel", flag:"https://"  }
//props : { country: { name:"israel", flag:"https://"  } }
