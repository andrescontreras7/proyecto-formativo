// src/components/PrivateRoute.js
import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { counterContext } from '../../context/CRMcontext';

const PrivateRoute = ({ element: Component, ...rest }) => {
  const { auth } = useContext(counterContext);


  return (
    <Route
      {...rest}
      element={auth.autenticado ? <Component /> : <Navigate to="/" />}
    />
  );
};

export default PrivateRoute;
