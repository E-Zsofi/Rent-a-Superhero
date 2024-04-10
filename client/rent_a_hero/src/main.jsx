import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Welcome from './assets/pages/Welcome.jsx';

const router = createBrowserRouter([{path: '/welcome', element: <Welcome/>}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)

