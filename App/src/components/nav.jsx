import React from "react";
import { useState, useEffect } from "react";
import  {LoggedOutNav} from './nav/loggedOutNav';
import { AdminNav } from "./nav/adminNav";
//import "../styles/nav/nav.css"

export const NavBar = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const loggedIn = true;
  const user = {role:'admin'};
  const {role} = user;
  const handleScroll = () => {
    if (window.scrollY === 0) {
      setVisible(true); // Show the navbar
      return;
    }
    // If scrolling down, hide the navbar; if scrolling up, show it
    if (window.scrollY > lastScrollY) {
      setVisible(false); // Scrolling down
    } else {
      setVisible(true); // Scrolling up
    }
    setLastScrollY(window.scrollY); // Update last scroll position
  };

  useEffect(() => {
    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]); // Dependency array to track last scroll position
  
  return(
    <div className="navbar">
  {!loggedIn ? (
    <LoggedOutNav />
  ) : (
    <>
      {role === "admin" && <AdminNav />}
      {role === "pre-admin" && <PreAdminNav />}
      {role === "user" && <UserNav />}
    </>
  )}
</div>
  )
}
