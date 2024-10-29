import React from "react";
import { useState, useEffect } from "react";
import  {LoggedOutNav} from './nav/loggedOutNav';
import { AdminNav } from "./nav/adminNav";
import { PreAdminNav } from "./nav/preAdminNav";
//import { UserNav } from "./nav/userNav";

export const NavBar = ({loggedIn = true}) => {
  const user = {role:'pre-admin'};
  const {role} = user;
  

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
