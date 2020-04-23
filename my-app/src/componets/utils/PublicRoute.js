import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "./utils";

export default PublicRoute = ({
  component: Component,
  restricted,
  ...rest
}) => {
  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() && restricted ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};
