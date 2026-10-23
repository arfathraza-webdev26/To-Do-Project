import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const TaskDisplay = () => {
  let { id } = useParams();
  let [user, setUser] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/tasks?userId=${id}`)
      .then((x) => setUser(x.data))
      .catch((err) => alert(err));
  }, [id]);

  return (
    <>
      <div id="taskDisplay">
        {
          user.map((x)=>{return <h1>{x.title}</h1>})
        }
      </div>
      <div id="progressInfo"></div>
    </>
  );
};

export default TaskDisplay;
