import React, { useState } from 'react'

const WhyUseState = () => {
    let [name, setName] = useState("Suman")
    console.log("****")
  return (
    <div>
        {name}
        <button onClick={() =>{
            setName("Ram")
        }}>Change Name</button>
    </div>
  )
}

export default WhyUseState