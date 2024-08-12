import React from 'react'
import { NavLink } from 'react-router-dom'

const MyLinks = () => {
  return (
    <div>
        <NavLink to="/products/create" style={{marginRight: '30px'}}>Create Product</NavLink>
        <NavLink to="/products" style={{marginRight: '30px'}}>Product</NavLink>
   
        <NavLink to="/students/create" style={{marginRight: '30px'}}>Create Student</NavLink>
        <NavLink to="/students" style={{marginRight: '30px'}}>Student</NavLink>
    </div>
  )
}



export default MyLinks