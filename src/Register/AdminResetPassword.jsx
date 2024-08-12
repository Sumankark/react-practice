import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const AdminUpdatePassword = () => {
  let [password, setPassword] = useState("");
  let navigate = useNavigate();
  let onSubmit = async (e) => {
    e.preventDefault();
    let data = {
      password: password,
    };
    try {
      let result = await axios({
        url: `http://localhost:8000/web-users/update-password`,
        method: `patch`,
        data: data,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(result);
      localStorage.removeItem("token");
      navigate(`/admin/login`);
    } catch (error) {
      toast.error("Email doesn't match", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };
  return (
    <>
      <ToastContainer></ToastContainer>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="Password">Password: </label>
          <input
            type="password"
            id="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
        </div>
        
        <button type="submit">update password</button>
      </form>
    </>
  );
};
export default AdminUpdatePassword;