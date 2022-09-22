import React, { Suspense, lazy } from 'react';
import { Navigate, Route, Routes as BrowserRoutes } from 'react-router-dom';

const HomePage = lazy(() => import('./components/HomePage'));
const Register = lazy(() => import('./components/Register'));

const Routes = () => {
  return (
    <Suspense fallback={<>Loader</>}>
      <BrowserRoutes>
        <Route
          path="/"
          element={ <HomePage />}
        />  
        <Route
          path="/register"
          element={ <Register />}
        />
        {/* <Route path="*" element={<HomePage />} /> */}
      </BrowserRoutes>
    </Suspense>
  );
};

export default Routes;
