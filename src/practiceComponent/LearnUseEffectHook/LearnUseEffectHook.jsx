import React, { useEffect, useState } from 'react'

const LearnUseEffectHook = () => {
  let [count, setCount] = useState(0);
  let [count2, setCount2] = useState(100);
  
    useEffect(()=>{
      console.log("I am useEffect function.")
    }, [count, count2]);// it is execute in first render and from second render it is depend on count and count2 ,if any value(count, count2) is changed it is execute.

    useEffect(() =>{
      console.log("I am useEffect function 2.")
    },[count])// it is execute in first render and from second render is depend on count if count is changed then it is execute.

    useEffect(()=>{
      console.log("I am useEffect 3.")
    },[])// it execute in first render only.

    useEffect(()=>{
      console.log("I am useEffect 4")
    })// it execute in each render.


  return (
    <div>
        count is {count}<br></br>
        <button onClick={()=>{
          setCount(count+ 1)
        }}>Increment</button><br />
        count2 is {count2}<br></br>
        <button onClick={()=>{
          setCount2(count2+ 1)
        }}>Increment</button>
    </div>
  )
}

export default LearnUseEffectHook