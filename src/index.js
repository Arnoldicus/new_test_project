import React from 'react';
import ReactDOM from 'react-dom';
import { ReactQueryConfigProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const queryConfig = {
  queries: {
    cacheTime: 0,
  },
};

ReactDOM.render(
  <BrowserRouter>
    <ReactQueryConfigProvider config={queryConfig}>
      <App />
    </ReactQueryConfigProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
