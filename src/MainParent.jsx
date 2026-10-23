import React, { useEffect, useState } from 'react'
import Header from './Header'
import AddTask from './AddTask'
import Info from './components/Info'
<<<<<<< HEAD
import TaskDisplay from './components/TaskDisplay'
import axios from 'axios'
import { useParams } from 'react-router-dom'
=======
>>>>>>> 4319811773aed4a45c723b2dc2f6a3661fdb7e46

const MainParent = () => {
  
  return (
    <div id='mainParent'>
     
      <Header/>
      <AddTask/>
      <Info/>
<<<<<<< HEAD
      <TaskDisplay/>
=======
>>>>>>> 4319811773aed4a45c723b2dc2f6a3661fdb7e46
    </div>
  )
}

export default MainParent
