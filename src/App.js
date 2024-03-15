import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";

import Body from "./components/Body";
//import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import ResMenu from "./components/ResMenu";
//import Grocery from "./components/Grocery";
import { UserContex } from "./utils/UserContex";
import { lazy, Suspense, useState, useEffect } from "react";
import Cart from "./components/Cart";
import appstore from './utils/appStore';
import { Provider } from 'react-redux';
//food ordering app
const Grocery = lazy(() => import("./components/Grocery"));
const Abt = lazy(() => import("./components/About"));
//The base
const AppLayout = () => {
  const [username, setUserName] = useState();
  useEffect(() => {
    user = {
      name: "John",
    };
    setUserName(user.name);
  }, []);
  return (
    <Provider store={ appstore }>
    <UserContex.Provider value={{ loggedInUser: username, setUserName }}>
      <div className="AppContainer">
        <div className="header">
          <Header />
        </div>
        <Outlet></Outlet>
      </div>
      </UserContex.Provider>
    </Provider>

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
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading about...</h1>}>
            <Abt />
          </Suspense>
        ),
      },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurent/:resid", element: <ResMenu /> },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {path:"/cart" ,element: <Cart/> }
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(pare);
// root.render(<AppLayout />);
//route need to provide in order to run the route
root.render(<RouterProvider router={appRoute} />);
