import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";

const Todo = () => {
    const [tasks, setTask] = useState([])

    useEffect(() => {
        fetch('https://enigmatic-castle-67715.herokuapp.com/task')
            .then(res => res.json())
            .then(data => setTask(data))
    }, [tasks])
    return (
        <div className='wide'>
            <h1> Your Todo</h1>


            {
                tasks.map(task => <li key={task._id}>{task.task} <Link to={`/update/${task._id}`}><button className="btn btn-xs">Edit</button></Link></li>)
            }
        </div>
    );
};

export default Todo;