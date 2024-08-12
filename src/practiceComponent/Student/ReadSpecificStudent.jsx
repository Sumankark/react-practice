import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ReadSpecificStudent = () => {
  let params = useParams();

  let [student, setStudent] = useState({});

  let getStudent = async () => {
    let result = await axios({
      url: `http://localhost:8000/students/${params.id}`,
      method: `GET`,
    });
    setStudent(result.data.result);
  };

  useEffect(() => {
    getStudent();
  });

  return (
    <div>
      <p>Student name is {student.name}</p>
      <p>Student age is {student.age}</p>
      <p>Student is married?{student.isMarried?"true" :"false"}</p>
    </div>
  );
};

export default ReadSpecificStudent;
