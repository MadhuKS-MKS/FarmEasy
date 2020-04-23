import React from "react";
import { Route, Redirect } from "react-router-dom";
import isAuthenticated from "./utils";

const PrivateRoute = ({ component: Component, role: role, ...rest }) => {
  //   isAuthenticated = isAuthenticated();
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={`/Login/${role}`} />
        )
      }
    />
  );
};

export default PrivateRoute;
