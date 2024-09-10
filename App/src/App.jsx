import React from 'react';
import { Login } from './components/login';
import {SignUp} from './components/signup'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Define your router configuration outside of the component
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path:"/signup",
    element:<SignUp/>,
  },
  {
    path:"/",
    element:<>home</>
  }
]);

export default function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

// Render your App component to the DOM
const root = createRoot(document.getElementById('root'));
root.render(<App />);
