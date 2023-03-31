import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './pages/Main';
import Detalhes from './pages/Detalhes';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>
  },
  {
    path: "detalhes",
    element: <Detalhes/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
