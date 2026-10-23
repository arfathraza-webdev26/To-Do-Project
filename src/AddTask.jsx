<<<<<<< HEAD
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AddTask = () => {
  let [task, addTask] = useState({
    title : ""
  });

  let handleChange = (e) =>{

    let {name,value} = e.target;
    addTask({...task, [name] : value})
  }

  let handleSubmit = (e) =>{
    e.preventDefault();
     let payload = task;
    axios.post(`http://localhost:4000/tasks`,payload);
    alert("Task added successfully");

  }
  return (
    <div id='addTask'>
        <input type="text" placeholder='What do you need to do?' id="addTask" name="task" onChange={handleChange}/>
        <button className='addButton' onClick={handleSubmit}>+ Add</button>
=======
import React from 'react'

const AddTask = () => {
  return (
    <div id='addTask'>
        <input type="text" placeholder='What do you need to do?' id="addTask" name="task"/>
        <button className='addButton'>+ Add</button>
>>>>>>> 4319811773aed4a45c723b2dc2f6a3661fdb7e46
      
    </div>
  )
}

export default AddTask
