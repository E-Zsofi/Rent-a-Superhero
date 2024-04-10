import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Welcome from './assets/pages/Welcome.jsx';
import User from './Pages/User/User.jsx';

const router = createBrowserRouter([{path: '/User', element: <User/>}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <User router={router}/>
  </React.StrictMode>,
)

