import React from "react";

import { Route, Link } from "react-router-dom";

export default function AppRouter(props) {
  const { routes } = props;

  return routes.map(route => {
    return <Route key={route.path} {...route} />;
  });
}

export function AppLinks(props) {
  const { routes } = props;
  return routes.map(route => {
    return (
      <Link key={route.path} style={{ marginLeft: "20px" }} to={route.path}>
        {route.title}
      </Link>
    );
  });
}
