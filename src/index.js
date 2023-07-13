import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Detalhes from './pages/Detalhes';
import ResultadoBusca from './pages/ResultadoBusca'
import { createHashRouter, RouterProvider } from 'react-router-dom';

const router = createHashRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "detalhes/:id",
    element: <Detalhes/>
  },
  {
    path: "resultadoBusca",
    element: <ResultadoBusca/>
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
