import React, { useState } from 'react'

const LearnUseState4 = () => {
  let [showImg, setShowImg] = useState(false)
    
    let handleImg = (value) =>{
        return (e)=>{
            setShowImg(value)
        }
    }
    return (
        <div>
        {showImg?<img src="./logo192.png" alt='logo'/>:null}
        <button onClick={handleImg(false)}>Hide image.</button>
        <button onClick={handleImg(true)}>Show Image.</button>
    </div>
  )
}

export default LearnUseState4