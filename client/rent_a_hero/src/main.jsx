import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./Pages/Admin/HomePage.jsx";
import About_us from "./Pages/Admin/About_us.jsx";
import Superhero from "./Pages/Admin/Superhero.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UserHomePage from "./Pages/User/UserHomePage.jsx";
import Signup from "./Pages/User/Signup.jsx";
import UserContactUs from "./Pages/User/UserContactUs.jsx";
import UserAboutUs from "./Pages/User/UserAboutUs.jsx";
import UserSuperhero from "./Pages/User/UserSuperhero.jsx";
import ContactUs from "./Pages/Admin/ContactUs.jsx";
import UserCart from "./Pages/User/UserCart.jsx";

import EditSuperhero from "./Pages/Admin/EditSuperhero.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserHomePage />,
  },
  {
    path: "/user/home",
    element: <UserHomePage />,
  },
  {
    path: "/user/about",
    element: <UserAboutUs />,
  },
  {
    path: "/user/superheroes",
    element: <UserSuperhero />,
  },
  {
    path: "/user/contact",
    element: <UserContactUs />,
  },
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
    path: "/admin/contacts",
    element: <ContactUs/>
  },
  {
    path: "/admin/edit/:id",
    element: <EditSuperhero/>
  },
  {
    path: "/cart",
    element: <UserCart/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
