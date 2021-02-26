import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import DashboardView from 'src/views/reports/DashboardView';
import LoginWrapper from 'src/views/auth/LoginWrapper';
import NotFoundView from 'src/views/errors/NotFoundView';
import RegisterView from 'src/views/auth/RegisterView';

import ObvestilaView from 'src/views/obvestila/ObvestilaListView';
import Logout from './views/auth/Logout';

const routes = (isLoggedIn) => [
  {
    path: '/app',
    element: isLoggedIn ? <DashboardLayout /> : <Navigate to="/login" />,
    children: [
      { path: 'dashboard', element: isLoggedIn ? <DashboardView /> : <DashboardView /> },
      { path: 'obvestila', element: isLoggedIn ? <ObvestilaView /> : <ObvestilaView /> },
      //{ path: 'obvestila', element: isLoggedIn ? <ObvestilaView /> : <Navigate to="/login" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginWrapper /> },
      { path: 'odjava', element: <Logout /> },
      { path: 'register', element: <RegisterView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
