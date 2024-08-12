import React, { useState } from 'react'

const Increment = () => {
    let [count, setCount] = useState(0)

    console.log("******")

    let [count2, setCount2] = useState(100)
    
    let handleCount =() =>{
        setCount(count+1)
    }

    let handleCount2 = ()=>{
        setCount2(count2+1)
    }

  return (
    <div>
        Increment count is {count}<br></br>
        Increment count2 is{count2}<br></br>
        <button onClick={handleCount}>Increment count</button>
        <button onClick={handleCount2}>Increment count2</button>
    </div>
  )
}

export default Increment