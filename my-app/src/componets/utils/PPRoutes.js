import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "./isAuthenticated";

export default PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? <Component {...props} /> : <Redirect to="/Login" />
      }
    />
  );
};

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
// PrivateRoutes = ({
//   component: Component,
//   auth: { isAuthenticated, loading },
//   ...rest
// }) => (
//   <Route
//     {...rest}
//     render={(props) =>
//       !isAuthenticated && !loading ? (
//         <Redirect to="\Login" />
//       ) : (
//         <Component {...props} />
//       )
//     }
//   />
// );
