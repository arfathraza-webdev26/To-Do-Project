import React from 'react'
import logo from "./resources/ticklogo.jpg"

const Header = () => {
  return (
    <div id='header'>

     <div id="headLogo"><img src={logo} alt="" /></div>
     <div id="headName">

        <h1>My-To-Do List</h1>
        <span>Smalll steps. Big Progress</span>



     </div>
     <div id="theme">☀️</div>
      
      
    </div>
  )
}

export default Header
