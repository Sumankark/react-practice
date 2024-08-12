import React from 'react'

const Details = (props) => {
  return (
    <div className='error'>
      My name is <b>{props.name}</b>.
      I live in <b>{props.address}</b>. 
      I am <b>{props.age}</b> years old.
    </div>
  )
}

export default Details