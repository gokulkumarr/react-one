import React from "react";
import ReactDOM from 'react-dom/client';
import "./App.css";
import HeaderComponent from "./components/header/Header";
import BodySection from './components/body/BodySection';
import FooterComponent from "./components/footer/Footer";
import Aboutus from "./components/Aboutus";
import ErrorPage from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet  } from 'react-router-dom';

function App() {
 
  return (
    <div className="wrapper-container container-fluid px-0">
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </div>
  );
}

const siteRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path:'/',
        element: <BodySection />
      },
      {
        path:'/about',
        element: <Aboutus />
      },
      {
        path:'/restaurants/:resId',
        element: <RestaurantMenu />
      }
    ],
    errorElement: <ErrorPage />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={siteRouter} />
  </React.StrictMode>
);

