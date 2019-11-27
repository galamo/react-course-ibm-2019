import React, { useState } from "react";

export default function useCustomForm(initialState) {
  const [formData, setFormData] = useState(initialState);

  const onChangeInput = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return [formData, onChangeInput];
}
