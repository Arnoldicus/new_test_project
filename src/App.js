import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './routes';

const App = () => {
  const element = useRoutes(routes);
  return <Suspense fallback={<div>Loading...</div>}>{element}</Suspense>;
};

export default App;
