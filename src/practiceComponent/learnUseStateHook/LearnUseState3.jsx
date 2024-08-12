import React, { useState } from 'react'

const LearnUseState3 = () => {

    let [showImg, setShowImg] = useState(false)
    
    let hideImage = () =>{
        setShowImg(false)
    }
    let showImage =() => {
        setShowImg(true)
    }
    return (
        <div>
        {showImg?<img src="./logo192.png" alt='logo'/>:null}
        <button onClick={hideImage}>Hide image.</button>
        <button onClick={showImage}>Show Image.</button>
    </div>
  )
}

export default LearnUseState3