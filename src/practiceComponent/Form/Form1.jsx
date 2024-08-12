import React, { useState } from "react";

const Form1 = () => {
  let [name, setName] = useState();
  let [surName, setSurName] = useState();
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();
  let [number, setNumber] = useState();
  let [dob, setDob] = useState();
  let [textarea, setTextarea] = useState();
  let onSubmit = (e) => {
    e.preventDefault();
    let data = {
      name: name,
      surname: surName,
      email: email,
      password: password,
    };
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            placeholder="Eg: Suman"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="surName">SurName</label>
          <input
            type="text"
            placeholder="Eg: Karki"
            id="surName"
            value={surName}
            onChange={(e) => {
              setSurName(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="....@gmail.com"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
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
          <label htmlFor="number">Phone Number</label>
          <input
            type="number"
            placeholder="Enter Number"
            id="number"
            value={number}
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="dob">Date of birth</label>
          <input
            type="date"
            placeholder="yy/mm/dd"
            id="dob"
            value={dob}
            onChange={(e) => {
              setDob(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="text">Description:-</label><br />
          <textarea
            id="text"
            cols="30"
            rows="10"
            placeholder="Enter text..." 
            value={textarea}
            onChange={(e)=>{
                setTextarea(e.target.value)
            }}
          ></textarea>
        </div>

        <button type="submit">Proceed</button>
      </form>
    </div>
  );
};

export default Form1;
