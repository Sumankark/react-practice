import React, { useState } from 'react'
import Name from './Name'

const AppComponent = () => {
    let [name, setName] = useState(false)
    
    let handleComponent = (value) =>{
    return ((e) =>{
      setName(value)
    })
  }

  return (
    <div>
        {name?<Name></Name>:null}
        <button onClick={handleComponent(true)}>Show Text</button>
        <button onClick={handleComponent(false)}>Hide Text</button>
        
    </div>
  )
}

export default AppComponent