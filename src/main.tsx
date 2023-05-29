import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './Root.jsx';
import Team from './Team.jsx';

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "team",
    element: <Team />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
