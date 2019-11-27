import React from "react";

export default function Filters(props) {
  return (
    <div>
      <div class="form-group">
        <label>Search Country Name</label>
        <input
          class="form-control"
          name="countryName"
          placeholder="Enter country"
          onChange={props.onChangeInput}
        />

        <label>Search Region Name</label>
        <input
          class="form-control"
          name="region"
          placeholder="Enter region"
          onChange={props.onChangeInput}
        />
        <label>has Borders</label>
        <input
          type="checkbox"
          class="form-control"
          name="hasBorders"
          placeholder="Enter country"
          //   onChange={props.onChangeInput}
        />
      </div>
    </div>
  );
}
