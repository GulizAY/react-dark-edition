import React from 'react';
import { Route } from 'react-router-dom';
import { AuthenticationLayout } from "pages/shared/_authenticationLayout"

export const AuthenticationRoute = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <AuthenticationLayout>
        <Component {...matchProps} />
      </AuthenticationLayout>
    )} />
  )
};