import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Element, isSignedIn, ...rest }) => {
  return isSignedIn ? <Element {...rest} /> : <Navigate to="/sign-in" />;
};

export default PrivateRoute;
