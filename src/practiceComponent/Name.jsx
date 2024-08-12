import React, { useState } from 'react'


const Name = () => {

  let [showComponent, setShowComponent] = useState("Suman")


  return (
    <div>
      My name is {showComponent}
    </div>
  )
}

export default Name;