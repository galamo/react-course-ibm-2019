import React from "react";
import css from "./style.module.css";
// export - > import { component } from "what ever.."
// export default import  component  from "what ever.."
export default function Header(props) {
  if (typeof props !== "object") return;
  const { value, color } = props;
  return (
    <h1 className={css.headerBg} style={{ color }}>
      {value || "missing header value"}
    </h1>
  );
}
