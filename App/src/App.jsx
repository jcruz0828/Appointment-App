import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import {NavBar} from './components/nav.jsx'
import './styles/app.css'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return (
    <div className="app">
      <NavBar/>
      <div className="view">
      <RouterProvider router={router} />
      </div>
    </div>
  );
}
