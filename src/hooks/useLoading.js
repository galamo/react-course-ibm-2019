import React, { useState } from "react";

export default function useLoading(initialState) {
  const [isLoading, setLoadingIndicator] = useState(true);

  return [formData, onChangeInput];
}
