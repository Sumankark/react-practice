import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateStudent = () => {
  let [name, setName] = useState("");
  let [age, setAge] = useState("");
  let [isMarried, setIsMarried] = useState(false);

  let onsubmit = async (e) => {
    e.preventDefault();
    
    let data = {
      name: name,
      age: age,
      isMarried: isMarried,
    }
    try {
      let result = await axios({
        url: `http://localhost:8000/students`,
        method:  `POST`,
        data: data,
      })
      console.log(result)

      setName("");
      setAge("");
      setIsMarried("");

      toast.success(result.data.message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      
    } catch (error) {
      toast.error('Unable to create student', {
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
      <ToastContainer />
      <form onSubmit={onsubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          placeholder="Student Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <label htmlFor="age">Age: </label>
        <input
          type="number"
          id="age"
          placeholder="Student age"
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <br />
        <label htmlFor="isMarried">Is Married: </label>
        <input
          type="checkbox"
          id="isMarried"
          checked={isMarried}
          onChange={() => setIsMarried(!isMarried)}
        />
        <br /> <br />
        <button type="submit">Proceed</button>
      </form>
    </div>
  );
};

export default CreateStudent;
