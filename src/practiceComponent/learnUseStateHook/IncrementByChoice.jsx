import React, { useState } from 'react'

const IncrementByChoice = () => {
    
    let [number, setNumber] = useState(0)

    let handleClick = (value) =>{
        return ((e) =>{
            setNumber(number + value)
        })
    }

  return (
    <div>
        {number}<br></br>
        <button onClick={handleClick(2)}>IncrementBy2</button>
        <button onClick={handleClick(100)}>IncrementBy100</button>
        <button onClick={handleClick(1000)}>IncreasedBy1000</button>
        <button onClick={handleClick(-number)}>Reset</button>

    </div>
  )
}

export default IncrementByChoice