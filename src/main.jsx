import React from 'react';
import ReactDOM from "react-dom/client";
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import './index.css'
import Layout from './Layout.jsx';
import Home from './components/Home/Home';
import About  from './components/About/About';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home/>,
        
      },
      {
        path: "about",
        element: <About/>,
        
      }
    ],
  }
  
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>,
)
