import React, { Suspense, lazy } from 'react';
import { Navigate, Route, Routes as BrowserRoutes } from 'react-router-dom';

const HomePage = lazy(() => import('./components/HomePage'));
const Register = lazy(() => import('./components/Register'));
const AddProduct = lazy(() => import('./components/AddProduct'));
const ManufacturerPortal = lazy(() => import('./components/ManufacturerPortal'));

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
        <Route path="/portal" element={ <ManufacturerPortal />}>
          <Route index element={<AddProduct/>}/>
          <Route path="addproduct" element={<AddProduct/>}/>
          <Route path="allproduct" element={<AddProduct/>}/>

        </Route>
        {/* <Route path="*" element={<HomePage />} /> */}
      </BrowserRoutes>
    </Suspense>
  );
};

export default Routes;
