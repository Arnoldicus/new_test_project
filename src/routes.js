import React from 'react';
import { Outlet } from 'react-router-dom';

const Dashboard = React.lazy(() => import('./Dashboard'));

export default [
  {
    path: '/',
    element: <Outlet />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: ':search_1', element: <Dashboard /> },
      { path: ':search_1/:search_2', element: <Dashboard /> },
      { path: ':search_1/:search_2/:search_3', element: <Dashboard /> },
    ],
  },
];
