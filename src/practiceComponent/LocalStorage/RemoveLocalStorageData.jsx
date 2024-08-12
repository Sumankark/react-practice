import React from 'react'

const RemoveLocalStorageData = () => {

  return (
    <div>
        <button onClick={() =>{localStorage.removeItem("token")}}>RemoveToken</button>
        <button onClick={() =>{localStorage.removeItem("name")}}>Remove name</button>
        <button onClick={()=>{localStorage.removeItem("isMarried")}}>Remove isMarried</button>
        <button onClick={() =>{localStorage.removeItem("age")}}>Remove age</button>
        <button onClick={() =>{localStorage.removeItem("chakra-ui-color-mode")}}>remove color mode</button>
    </div>
  )
}

export default RemoveLocalStorageData


// local storage is the browser's memory for a particular url
// the data in a local storage persist even when the session end (browser close) (tab close)