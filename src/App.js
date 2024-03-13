import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";

import Body from "./components/Body";
//import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import ResMenu from "./components/ResMenu";
//import Grocery from "./components/Grocery";

import { lazy,Suspense } from "react";
//food ordering app
const Grocery = lazy(() =>import("./components/Grocery"))
const Abt = lazy(()=> import("./components/About"))
//The base
const AppLayout = () => {
  return (
    <div className="AppContainer">
      <div className="header">
  <Header />
      </div>
      <Outlet></Outlet>
    </div>
  );
};

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about", element: (
          <Suspense fallback={<h1>Loading about...</h1>}>
             <Abt /> 
        </Suspense>
      )},
      { path: "/contact", element: <Contact /> },
      { path: "/restaurent/:resid", element: <ResMenu /> },
      {
        path: "/grocery", element: (
          <Suspense fallback={<h1>Loading...</h1>}>
          <Grocery />

          </Suspense>
        )
          
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(pare);
// root.render(<AppLayout />);
//route need to provide in order to run the route
root.render(<RouterProvider router={appRoute} />);
