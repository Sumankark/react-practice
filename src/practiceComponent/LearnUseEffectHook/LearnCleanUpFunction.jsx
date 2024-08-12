import React, { useEffect, useState } from 'react'

const LearnCleanUpFunction = () => {
    let [count, setCount]  = useState(0)

    useEffect(()=>{
        console.log("I am useEffect");

        return (()=>{
            console.log("I am clean up function.")
        }) // cleanup function is a function which is written by useEffect. 
        // cleanup function does not execute in first render but from second render cleanup function is execute if useEffect function.
        /* What happen when useEffect function gets execute=>
             first cleanup function run then code above is execute. */
        // When component is unmount nothings gets executed except cleanup function.
    }, [count])

  return (
    <div>
        Count is {count}
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
    </div>
  )
}

export default LearnCleanUpFunction