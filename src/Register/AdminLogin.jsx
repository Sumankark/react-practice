import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { GlobalVariableContext } from "../MyApp";

const AdminLogin = () => {
  let navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let global = useContext(GlobalVariableContext)


  let onSubmit = async (e) => {
    e.preventDefault();

    let data = {
      email: email,
      password: password,
    };

    data = {
      ...data,
      role: "admin",
    };
    try {
      let result = await axios({
        url: `http://localhost:8000/web-users/login`,
        method: `POST`,
        data: data,
      });
      let token = result.data.token;
      localStorage.setItem("token", token);
      global.setToken(token)
      
      navigate("/admin")

      // toast("Product create successfully.");
      
    } catch (error) {
      toast.error("Unable to login", {
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
    <div>
      <ToastContainer></ToastContainer>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            placeholder="abc@gmail.com"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            placeholder="***********"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <button type="submit">Proceed</button>
      </form>
      <div onClick={()=>{
        navigate(`/admin/forgot-password`)
      }}>forgot password?</div>
    </div>
  );
};

export default AdminLogin;
