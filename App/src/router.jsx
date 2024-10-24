import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Login } from "./pages/loggedOut/login";
import { Register } from "./pages/loggedOut/register";
import HomePage from "./pages/loggedOut/home";
import Calendar from "./components/calender.jsx";
const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/", element: <HomePage/>},
  {path:"/dash", element: <Calendar/>}
]);

export default router;
