import React, { useState } from "react";

export default function RegisterPage() {
  const initialState = { password: "", email: "" };
  const [formData, setFormData] = useState(initialState); //first render formData = initialState
  const [counter, setCounter] = useState(0);

  const onChangeInput = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form noValidate>
      <div className="form-group">
        <label>Email address</label>
        <input
          name="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          onChange={onChangeInput}
          value={formData.email}
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          name="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          onChange={onChangeInput}
          value={formData.password}
        />
      </div>

      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Register
      </button>
      <h2> failed to: {counter} </h2>
    </form>
  );
}
