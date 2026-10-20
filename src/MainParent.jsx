import React from 'react'
import Header from './Header'
import AddTask from './AddTask'
import Info from './components/Info'

const MainParent = () => {
  return (
    <div id='mainParent'>
      <Header/>
      <AddTask/>
      <Info/>
    </div>
  )
}

export default MainParent
