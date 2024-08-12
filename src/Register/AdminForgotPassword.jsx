import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const AdminForgotPassword = () => {
  let [email, setEmail] = useState("");
  let onSubmit = async (e) => {
    e.preventDefault();
    let data = {
      email: email,
    };
    try {
      let result = await axios({
        url: `http://localhost:8000/web-users/forgot-password`,
        method: `post`,
        data: data,
      });
      setEmail("");
      console.log(result);
      toast("link has been send to your gmail. Please verify it,");
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
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
        </div>
        <button type="submit">Proceed</button>
      </form>
    </>
  );
};
export default AdminForgotPassword;
