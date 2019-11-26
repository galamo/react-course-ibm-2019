import React from "react";

// export - > import { component } from "what ever.."
// export default import  component  from "what ever.."
export default function Header(props) {
  const { value, color } = props;
  return <h1 style={{ color }}>{value || "missing header value"}</h1>;
}
