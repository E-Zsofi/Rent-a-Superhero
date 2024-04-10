import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import  Admin  from "./Pages/Admin.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {path: '/admin', 
  element: <Admin/>}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

