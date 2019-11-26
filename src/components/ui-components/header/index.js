import React from "react";
// export - > import { component } from "what ever.."
// export default import  component  from "what ever.."
export default function Header(props) {
  if (typeof props !== "object") return;
  const { value, color } = props;
  return (
    <h1 className="jumbotron" style={{ color }}>
      {value || "missing header value"}
    </h1>
  );
}
