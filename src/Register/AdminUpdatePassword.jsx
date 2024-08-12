import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const AdminUpdatePassword = () => {
  let navigate = useNavigate();
  let [oldPassword, setOldPassword] = useState("");
  let [newPassword, setNewPassword] = useState("");
  let token = localStorage.getItem("token");

  let onSubmit = async (e) => {
    e.preventDefault();

    let data = {
      oldPassword: oldPassword,
      newPassword: newPassword,
    };
    try {
      let result = await axios({
        url: `http://localhost:8000/web-users/update-password`,
        method: `PATCH`,
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(result)
      localStorage.removeItem("token", token);

      navigate("/admin/login");

      toast("Product create successfully.");
    } catch (error) {
      toast.error("Unable to update password", {
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
          <label htmlFor="old-password"> Old Password: </label>
          <input
            type="password"
            placeholder="***********"
            id="old-password"
            value={oldPassword}
            onChange={(e) => {
              setOldPassword(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="new-password">New Password: </label>
          <input
            type="password"
            placeholder="***********"
            id="new-password"
            value={newPassword}
            onChange={(e) => {
              setNewPassword(e.target.value);
            }}
          />
        </div>

        <button type="submit">Proceed</button>
      </form>
    </div>
  );
};

export default AdminUpdatePassword;
