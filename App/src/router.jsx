import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Login } from "./pages/loggedOut/login";
import { Register } from "./pages/loggedOut/register";
import HomePage from "./pages/loggedOut/home";
import Calendar from "./pages/loggedIn/employee/calender.jsx";
import ListView from  "./pages/loggedIn/employee/list.jsx";

const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/", element: <HomePage/>},
  {path:"/calendar", element: <Calendar/>},
  {path:'/tasks',element:<ListView/>}
]);

export default router;
