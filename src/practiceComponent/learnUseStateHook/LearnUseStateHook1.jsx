import React, { useState } from 'react'

const LearnUseStateHook1 = () => {

  let [Name, setName] = useState("Suman Karki")
  let [Age, setAge] = useState("23")

  let handleClick =(e) =>{
    setName("Ram")
  }
  let changeAge = (e) =>{
    setAge("22")
  }

  return (
    <div>
      My name is {Name}.<br></br>
      I am {Age} years old. <br />
      <button onClick={handleClick}>Change name</button><br />
      <button onClick={changeAge}>Age Change</button>
    </div>
  )
}

export default LearnUseStateHook1