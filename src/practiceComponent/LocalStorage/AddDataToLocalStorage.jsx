import React from 'react'

const AddDataToLocalStorage = () => {
    let token = "223454323"

    localStorage.setItem("token", token)
    localStorage.setItem("name", "Suman")
    localStorage.setItem("age", "18")
    localStorage.setItem("isMarried", "false")

  return (
    <div>
        
    </div>
  )
}

export default AddDataToLocalStorage