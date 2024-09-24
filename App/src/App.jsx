import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from "./routes/router.jsx"
import NavBar from './components/nav.jsx';



export default function App() {
  return (
    <div className="App">
      <NavBar/>
      <RouterProvider router={router}/>
    </div>
  );
}
