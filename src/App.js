import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import ResMenu from "./components/ResMenu";

//food ordering app
   

//The base
const AppLayout = () => {
  return (
    <div className="AppContainer">
      <Header />
      <Outlet></Outlet>
    </div>
  );
  
};

const appRoute = createBrowserRouter([
  {
    path: '/', element: <AppLayout />, errorElement: <Error />,
    children: [
  {path:'/', element: <Body />},
  { path: '/about', element: <About /> },
  { path: '/contact', element: <Contact /> },
  {path:'/restaurent/:resid',element : <ResMenu />}
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(pare);
// root.render(<AppLayout />);
//route need to provide in order to run the route
root.render(<RouterProvider router={appRoute} />);
