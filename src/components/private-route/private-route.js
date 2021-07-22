import React from "react";

import { Route, Redirect } from "react-router-dom";

/**
 * @component
 * @description Custom route component based off on react-router that 
 * conditionally allows access to a specific component.
 * @property {ReactComponent} Component Component to which routing is kept authenticated.
 */

const PrivateRoute = props => {
  const { Component, isLogged, ...restProps } = props;
  return (
    <Route
      {...restProps}
      render={props =>
        localStorage.getItem("isLogged") === "true" ? (
          <Component />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
