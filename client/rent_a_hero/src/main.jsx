import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./Pages/Admin/HomePage.jsx";
import About_us from "./Pages/Admin/About_us.jsx";
import Superhero from "./Pages/Admin/Superhero.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import User from "./Pages/User/User.jsx";

const router = createBrowserRouter([
  { path: "/welcome", element: <Welcome /> },
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
  { path: "/User", element: <User /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
