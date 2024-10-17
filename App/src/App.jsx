import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import {NavBar} from './components/nav.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return (
    <div className="app" style={{ marginTop: "70px" }}>
      {" "}
      <NavBar />
      <RouterProvider router={router} />
    </div>
  );
}
