import React, { useState } from 'react'

const LearnUseState2 = () => {
    let [count, setCount] = useState(0)

    let increaseValue = (e) =>{
        if(count < 10){
            setCount(count+1)
        }
    }
    let decreaseValue = (e) =>{
        if(count>0){
            setCount(count-1)
        }
    }
    let resetValue = (e) =>{
        setCount("0") 
    }
    

  return (
    <div>
        I am {count}
        <button onClick={increaseValue}>Increment</button>
        <button onClick={decreaseValue}>Decrement</button>
        <button onClick={resetValue}>Reset</button>
    </div>
  )
}

export default LearnUseState2