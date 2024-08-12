import React from 'react'

const RemoveDataFromSessionStorage = () => {
  return (
    <div>
        <button onClick={()=>{sessionStorage.removeItem("token")}}>Remove Token</button>
    </div>
  )
}

export default RemoveDataFromSessionStorage

// session storage is the browser memory of particular url in particular tab(session)
// data will persist in a given session(ie data will remove when tab close)