import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import  HomePage  from "./Pages/Admin/HomePage.jsx";
import About_us from "./Pages/Admin/About_us.jsx"
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
  path: '/admin', 
  element: <HomePage/>
},
{
  path: '/admin/about',
  element: <About_us/>
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

