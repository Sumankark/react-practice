import React, { useState } from "react";

const Form3 = () => {
  let [day, setDay] = useState("day1");
  let [gender, setGender] = useState("male");
  let days = [
    {
      label: "Sunday",
      value: "day1",
    },
    {
      label: "Monday",
      value: "day2",
    },
    {
      label: "Tuesday",
      value: "day3",
    },
    {
      label: "Wednesday",
      value: "day4",
    },
    {
      label: "Thursday",
      value: "day5",
    },
    {
      label: "Friday",
      value: "day6",
    },
    {
      label: "Saturday",
      value: "day7",
    },
  ];

  let genders = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ];

  let onSubmit = (e) => {
    e.preventDefault();
    let data = {
      day: day,
      gender: gender,
    };
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label>Day: </label>
          <select
            onChange={(e) => {
              e.preventDefault();
              setDay(e.target.value);
            }}
          >
            {days.map((data, i) => {
              return (
                <option value={data.value} key={i}>
                  {data.label}
                </option>
              );
            })}
          </select>
        </div>
        {/* <div>
            <label>Gender: </label>
          <select
            onChange={(e) => {
              setGender(e.target.value);
            }}
          >
            {genders.map((item, i) => {
              return (
                <option value={item.value} key={i}>
                  {item.label}
                </option>
              );
            })}
          </select>
        </div> */}
        <div>
          <label>Gender</label>
          <br />

          {/* <label htmlFor="male">Male</label>
            <input type="radio" id="male" value="male" checked={gender === "male"} onChange={(e) =>{
                setGender(e.target.value);
            }} />
            <label htmlFor="female">Female</label>
            <input type="radio" id="female" value="female" checked= {gender === "female" } onChange={(e) =>{setGender(e.target.value)}} />
            <label htmlFor="other">Other</label>
            <input type="radio" id="other" value="other" checked= {gender === "other" } onChange={(e) =>{setGender(e.target.value)}} /> */}
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

        {/* <div>
          <label>Day</label>
          <br />
          <select
            value={day}
            onChange={(e) => {
              e.preventDefault();
              setDay(e.target.value);
            }}
          >
            <option value="day-1">Sunday</option>
            <option value="day-2">Monday</option>
            <option value="day-3">Tuesday</option>
            <option value="day-4">Wednesday</option>
            <option value="day-5">Thursday</option>
            <option value="day-6">Friday</option>
            <option value="day-7">Saturday</option>
          </select>
        </div> */}
        <div></div>
        <button type="submit">Proceed</button>
      </form>
    </div>
  );
};

export default Form3;
