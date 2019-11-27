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
      </div>
    </div>
  );
}
