import React from 'react'

const AddTask = () => {
  return (
    <div id='addTask'>
        <input type="text" placeholder='What do you need to do?' id="addTask" name="task"/>
        <button className='addButton'>+ Add</button>
      
    </div>
  )
}

export default AddTask
