import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./Pages/Admin/HomePage.jsx";
import About_us from "./Pages/Admin/About_us.jsx";
import Superhero from "./Pages/Admin/Superhero.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import User from "./Pages/User/User.jsx";
import Signup from "./Pages/User/Signup.jsx";
import ContactUs from "./Pages/Admin/ContactUs.jsx";

import EditSuperhero from "./Pages/Admin/EditSuperhero.jsx";

const router = createBrowserRouter([
  {
    path: "/admin",
    element: <HomePage />,
  },
  {
    path: "/admin/home",
    element: <HomePage />,
  },
  {
    path: "/admin/about",
    element: <About_us />,
  },
  {
    path: "/admin/superheroes",
    element: <Superhero />,
  },
  {
    path: "/user/signup",
    element: <Signup/>
  },
  {
    path: "/admin/contact",
    element: <ContactUs/>
  },
  { 
    path: "/User", 
    element: <User /> 
  },
  {
    path: "/admin/edit/:id",
    element: <EditSuperhero/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
