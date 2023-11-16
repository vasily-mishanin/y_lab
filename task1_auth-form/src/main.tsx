import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root/Root.tsx';
import ErrorPage from './pages/ErrorPage/ErrorPage.tsx';
import SignInPage from './pages/SignInPage/SignInPage.tsx';
import { AuthProvider } from './context/authContext.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'signin/',
        element: <SignInPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// if (import.meta.env.MODE === 'development') {
//   // When development, setup the MSW.
//   // import the worker (under the browser.ts file)
//   import('./mocks/browser.ts')
//     .then(({ worker }) => {
//       // Start the worker.
//       worker.start();
//     })
//     .then(() => {
//       // Render the application.
//       root.render(
//         <React.StrictMode>
//           <AuthProvider>
//             <RouterProvider router={router} />
//           </AuthProvider>
//         </React.StrictMode>
//       );
//     });
// } else {
//   // Render the application in production without the MSW.
//   root.render(
//     <React.StrictMode>
//       <AuthProvider>
//         <RouterProvider router={router} />
//       </AuthProvider>
//     </React.StrictMode>
//   );
// }

import('./mocks/browser.ts')
  .then(({ worker }) => {
    // Start the worker.
    worker.start();
  })
  .then(() => {
    // Render the application.
    root.render(
      <React.StrictMode>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </React.StrictMode>
    );
  });
