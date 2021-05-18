import React from "react";
import { Route, Redirect } from "react-router-dom";
import JwtDecode from "jwt-decode";
import PropTypes from "prop-types";

const AuthRoute = ({ layout: Layout, component: Component, ...rest }) => {
  let authUser;

  const isAuthenticated = () => {
    const token = localStorage.getItem("Token");
    if (token) {
      const decodedToken = JwtDecode(token);
      authUser = decodedToken;
      if (decodedToken.exp * 1000 < Date.now()) {
        localStorage.removeItem("Token");
        return false;
      }
      return true;
    }
    return false;
  };

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          <Layout>
            <Component {...props} authUser={authUser} />
          </Layout>
        ) : (
          <Redirect
            to={{
              pathname: "/management/signin",
              state: {
                from: props.location,
              },
            }}
          />
        )
      }
    />
  );
};

AuthRoute.propTypes = {
  layout: PropTypes.func.isRequired,
  component: PropTypes.func.isRequired,
  // location: PropTypes.string.isRequired,
};

export default AuthRoute;
