import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ReadAllUser = () => {
  let [users, setUsers] = useState([]);

  let navigate = useNavigate();

  let getAllUser = async () => {
    let result = await axios({
      url: `http://localhost:8000/web-users`,
      method: `GET`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    console.log(result);
    setUsers(result.data.result);
  };

  let deleteUser = async (user) => {
    let result = await axios({
      url: `http://localhost:8000/web-users/${user._id}`,
      method: `DELETE`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    getAllUser();
  };

  useEffect(() => {
    getAllUser();
  }, []);

  return (
    <div>
      {users.map((value, i) => {
        return (
          <div key={i} style={{ border: "solid red 5px", margin: "20px" }}>
            <p>Name: {value.fullName}</p>
            <p>Email: {value.email}</p>
            <p>Date of Birth: {new Date(value.dob).toLocaleDateString()}</p>
            <button
              style={{ marginRight: "20px" }}
              onClick={() => {
                navigate(`/users/${value._id}`);
              }}
            >
              view
            </button>
            <button
              style={{ marginRight: "20px" }}
              onClick={() => {
                navigate(`/users/update/${value._id}`);
              }}
            >
              update
            </button>
            <button
              style={{ marginRight: "20px" }}
              onClick={() => {
                deleteUser(value);
              }}
            >
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ReadAllUser;
