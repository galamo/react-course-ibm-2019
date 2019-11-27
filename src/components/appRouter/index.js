import React from "react";

import { Route } from "react-router-dom";

export default function AppRouter(props) {
  const { routes } = props;

  return routes.map(route => {
    return <Route {...route} />;
  });
}
