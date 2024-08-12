import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalVariableContext } from "../MyApp";

const AdminLogout = () => {
  let global = useContext(GlobalVariableContext)
  let navigate = useNavigate();
  
  useEffect(() => {
    global.setToken(null)
    localStorage.removeItem("token");
    navigate("/");
  }, []);
  return <div>AdminLogout</div>;
};

export default AdminLogout;


