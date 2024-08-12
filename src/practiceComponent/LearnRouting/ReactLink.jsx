import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalVariableContext } from "../../MyApp";

const ReactLink = () => {
  let global = useContext(GlobalVariableContext);
  let token = global.token;
  console.log(token);
  return (
    <div>
      {/* <NavLink to="/products/create" style={{ marginRight: "20px" }}>
        Create Products
      </NavLink>
      <NavLink to="/verify-email" style={{ marginRight: "20px" }}>
        Verify Email
      </NavLink>
      <NavLink to="/products" style={{ marginRight: "20px" }}>
        Products
      </NavLink>
      <NavLink to="/students/create" style={{ marginRight: "20px" }}>
        Create Students
      </NavLink>
      <NavLink to="/students" style={{ marginRight: "20px" }}>
        Students
      </NavLink> */}
      <NavLink to="/admin/register" style={{ marginRight: "20px" }}>
        Admin Register
      </NavLink>

      {token ? (
        <>
          <NavLink to="/admin/my-profile" style={{ marginRight: "20px" }}>
            My Profile
          </NavLink>
          <NavLink to="/admin/logout" style={{ marginRight: "20px" }}>
            LogOut
          </NavLink>
          <NavLink to="/admin/update-password" style={{ marginRight: "20px" }}>
            Update password
          </NavLink>
          <NavLink to="/admin/read-all-users" style={{ marginRight: "20px" }}>
            Read All User
          </NavLink>
        </>
      ) : (
        <>
          <NavLink to="/admin/login" style={{ marginRight: "20px" }}>
            Admin Login
          </NavLink>
        </>
      )}
    </div>
  );
};

export default ReactLink;
