import axios from "axios";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { date } from "yup";

const AdminProfileUpdate = () => {
  let [fullName, setFullName] = useState("");
  let [dob, setDob] = useState("");
  let [gender, setGender] = useState("male");
  let navigate = useNavigate();
  let token = localStorage.getItem("token");

  let onSubmit = async (e) => {
    e.preventDefault();

    let data = {
      fullName: fullName,
      dob: dob,
      gender: gender,
    };

    try {
      let result = await axios({
        url: `http://localhost:8000/web-users/update-profile`,
        method: `PATCH`,
        data: data,
        headers: {
            Authorization: `Bearer ${token}`
        }
      });
      
      navigate("/admin/my-profile")

      // toast("Product create successfully.");
      
    } catch (error) {
      toast.error("Unable to update", {
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

  let genders = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ];

  let getAdminProfile = async () => {
    try {
      let result = await axios({
        url: `http://localhost:8000/web-users/my-profile`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      let data = result.data.data;
      setDob(data.dob)
      setFullName(data.fullName)
      setGender(data.gender)
    } catch (error) {}
  };
  return (
    <div>
      <ToastContainer></ToastContainer>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="fullName">Full Name: </label>
          <input
            type="text"
            placeholder="Eg: Suman"
            id="fullName"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
            }}
          />
        </div>

      

        <div>
          <label htmlFor="dob">Dob: </label>
          <input
            type="date"
            id="dob"
            value={dob}
            onChange={(e) => {
              setDob(e.target.value);
            }}
          />
        </div>

        <div>
          <label>Gender: </label>
          <br />
          {genders.map((item, i) => {
            return (
              <>
                <label htmlFor={item.value}>{item.label}</label>
                <input
                  type="radio"
                  id={item.value}
                  value={item.value}
                  checked={gender === item.value}
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                />
              </>
            );
          })}
        </div>

        <button type="submit">Proceed</button>
      </form>
    </div>
  );
};

export default AdminProfileUpdate;
