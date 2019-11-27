import React from "react";

export default function Filters(props) {
  return (
    <div>
      <div className="form-group">
        <label>Search Country Name</label>
        <input
          className="form-control"
          name="countryName"
          placeholder="Enter country"
          onChange={props.onChangeInput}
        />

        <label>Search Region Name</label>
        <input
          className="form-control"
          name="region"
          placeholder="Enter region"
          onChange={props.onChangeInput}
        />
        <label>has Borders</label>
        <input
          type="checkbox"
          className="form-control"
          name="hasBorders"
          placeholder="Enter country"
          //   onChange={props.onChangeInput}
        />
      </div>
    </div>
  );
}
