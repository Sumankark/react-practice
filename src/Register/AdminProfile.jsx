import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminProfile = () => {
  let token = localStorage.getItem("token");
  let [profile, setProfile] = useState({});
  let navigate = useNavigate();

  let getAdminProfile = async () => {
    try {
      let result = await axios({
        url: `http://localhost:8000/web-users/my-profile`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProfile(result.data.data);
    } catch (error) {}
  };
  useEffect(() => {
    getAdminProfile();
  }, []);
  return (
    <div>
      <p>Full name = {profile.fullName}</p>
      <p>Gender = {profile.gender}</p>
      <p>Date of Birth = {new Date(profile.dob).toLocaleDateString()}</p>
      <p>Email = {profile.email}</p>
      <p>Role = {profile.role}</p>

      <button onClick={()=>{
        navigate("/admin/profile-update")
      }}>Update Profile</button>
    </div>
  );
};

export default AdminProfile;