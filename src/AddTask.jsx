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
      
    </div>
  )
}

export default AddTask
