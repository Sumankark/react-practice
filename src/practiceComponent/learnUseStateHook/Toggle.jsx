import React, { useState } from 'react'

const Toggle = () => {
    let[show, setShow] = useState(true);

    let handleImage = (e)=>{
        if(show === true){
            setShow(false)
        }else{
            setShow(true);
        }
    }

  return (
    <div>
        {show?<img src="logo192.png" alt="logo" />:null}
        <button onClick={handleImage}>
            {show === true? "Hide": "Show"}
        </button>
    </div>
  )
}

export default Toggle