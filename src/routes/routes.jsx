import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Works from "../pages/works/Works";
import Login from "../pages/login/Login";
import Register from "../pages/home/register/Register";
import Error from "../pages/home/Error/Error";
import ServiceDetails from "../pages/serviceDetails/ServiceDetails";
import PrivateRoute from "./PrivateRoute";
import Support from "../pages/support/Support";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error />,
      children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/about",
            element: <About />
        },
        {
          path: "/works",
          element: <PrivateRoute> <Works /> </PrivateRoute>
        },
        {
          path: "/login",
          element:<Login />,
        },
        {
          path: "/register",
          element: <Register />
        },
        {
          path: "/service/:id",
          element: <PrivateRoute><ServiceDetails /></PrivateRoute> 
        },
        {
          path: "/support",
          element: <PrivateRoute><Support /></PrivateRoute>
        }
      ]
    },
  ]);


  export default router