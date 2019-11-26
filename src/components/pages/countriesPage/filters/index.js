import React from "react";

export default function Filters(props) {
  //   const onChangeInput = e => {
  //     console.log(e.target.checked);
  //   };

  //   console.log(props);
  return (
    <>
      <div
        className="row"
        style={{ justifyContent: "center", alignContent: "center" }}
      >
        <div className="col-4">
          <label> search name</label>
          <input name="name" onChange={props.onChangeInput} />
        </div>
        <div className="col-4">
          <label> region</label>
          <input name="region" onChange={props.onChangeInput} />
        </div>
        <div className="col-4">
          <input
            name="borders"
            type="checkbox"
            onChange={e => {
              console.log(",,,kjhhjghg", e.target.checked);
              props.onChangeInput({
                target: { name: "borders", value: e.target.checked }
              });
            }}
          />
          <label> only borders?</label>
        </div>
      </div>
    </>
  );
}
