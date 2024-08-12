import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav style={{backgroundColor: "brown"}}>
        <NavLink to="/products/create" style={{ marginRight: "20px", color: "whitesmoke"}}>
          Create Products
        </NavLink>
        <NavLink to="/products" style={{ marginRight: "20px", color: "whitesmoke"}}>
          Products
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
