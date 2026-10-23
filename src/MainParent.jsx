import React, { useEffect, useState } from 'react'
import Header from './Header'
import AddTask from './AddTask'
import Info from './components/Info'
import TaskDisplay from './components/TaskDisplay'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const MainParent = () => {
  
  return (
    <div id='mainParent'>
     
      <Header/>
      <AddTask/>
      <Info/>
      <TaskDisplay/>
    </div>
  )
}

export default MainParent
