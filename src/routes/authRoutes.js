import * as React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export function LoggedSecurity() {
  const isAuthenticated = () => {
    if (localStorage.getItem('ID')) {
      return true;
    }
    return false;
  };

  return isAuthenticated() ? <Outlet /> : <Navigate to='/login' />;
}

export function LoginSecurity() {
  const isAuthenticated = () => {
    if (!localStorage.getItem('ID')) {
      return true;
    }
    return false;
  };

  return isAuthenticated() ? <Outlet /> : <Navigate to='/painel' />;
}
