import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { date } from "yup";

const AdminRegister = () => {
  let [fullName, setFullName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [dob, setDob] = useState("");
  let [gender, setGender] = useState("male");
  let [phoneNumber, setPhoneNumber] = useState("");

  
  let onSubmit = async (e) => {
    e.preventDefault();

    let data = {
      fullName: fullName,
      email: email,
      password: password,
      dob: dob,
      gender: gender,
      phoneNumber: phoneNumber,
    };

    data = {
      ...data,
      role: "admin",
    };

    try {
      let result = await axios({
        url: `http://localhost:8000/web-users`,
        method: `POST`,
        data: data,
      });
      console.log(result);

      setFullName("");
      setEmail("");
      setPassword("");
      setDob("");
      setGender("male");
      setPhoneNumber("");
      // toast("Product create successfully.");
      toast.success(
        "A link has been sent to you email. Please click on given link to verify account",
        {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }
      );
    } catch (error) {
      toast.error("Unable to create product", {
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

        <div>
          <label htmlFor="phoneNumber">Phone Number: </label>
          <input
            type="number"
            placeholder="9800000000"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
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

export default AdminRegister;
