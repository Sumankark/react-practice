import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ReadAllStudent = () => {
  let [students, setStudents] = useState([]);
  console.log(students)
  let navigate = useNavigate();

  let getAllStudent = async () => {
    let result = await axios({
      url: `http://localhost:8000/students`,
      method: `GET`,
    });
    setStudents(result.data.result);
  };
  useEffect(() => {
    getAllStudent();
  }, []);
  return (
    <div>
      {students.map((value, i) => {
        return (
          <div key={i} style={{ border: "solid blue 5px", margin: "20px" }}>
            <p>Name of students is {value.name}</p>
            <p>Age of students is {value.age}</p>
            <p>Students is married? {value.isMarried ? "true" : "false"}</p>
            <button
              style={{ marginRight: "20px" }}
              onClick={() => {
                navigate(`/students/${value._id}`);
              }}
            >
              view
            </button>
            <button
              style={{ marginRight: "20px" }}
              onClick={() => {
                navigate(`/students/update/${value._id}`);
              }}
            >
              Update
            </button>
            <button
              style={{ marginRight: "20px" }}
              onClick={async () => {
                let result = await axios({
                  url: `http://localhost:8000/students/${value._id}`,
                  method: `DELETE`,
                });
                getAllStudent();
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

export default ReadAllStudent;
