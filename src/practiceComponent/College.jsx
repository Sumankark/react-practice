import React from 'react'

// get props using destructuring.

const College = ({name, address}) => {
  return (
    <div>
        College name is {name}. It is located in {address}
    </div>
  )
}

export default College