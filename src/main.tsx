import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './Root.js';
import User from './User.js';
import UserError from './UserError.js';

const router = createHashRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: 'User',
    errorElement: <UserError />,
    children: [
      {
        path: ':userId',
        element: <User />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
