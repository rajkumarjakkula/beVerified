import React, { Suspense, lazy } from 'react';
import { Route, Routes as BrowserRoutes } from 'react-router-dom';
import ShowProduct from './components/ShowProduct';
import Loading from './components/shared/Loader';
const HomePage = lazy(() => import('./components/HomePage'));
const Register = lazy(() => import('./components/Register'));
const AddProduct = lazy(() => import('./components/AddProduct'));

const Routes = () => {
  return (
    <Suspense fallback={<Loading/>}>
      <BrowserRoutes>
        <Route
          path="/"
          element={ <HomePage />}
        />  
        <Route
          path="/register"
          element={ <Register />}
        />
         <Route
          path="/Load"
          element={ <Loading />}
        />
        <Route path="addproduct" element={<AddProduct/>}/>
        <Route path="showproducts" element={<ShowProduct/>}/>
      </BrowserRoutes>
    </Suspense>
  );
};

export default Routes;
