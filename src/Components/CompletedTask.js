import React, { useEffect } from 'react';
import { useState } from 'react';

const CompletedTask = () => {
    const [com, setCom] = useState([])
    useEffect(() => {
        fetch('https://enigmatic-castle-67715.herokuapp.com/completed', {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => setCom(data))
    }, [com]);
    return (
        <div className='wide'>
            <h2 className='text-2xl'>View our completed Task</h2>

            {
                com.map(task => <p key={task._id}> {task.tas}</p>)
            }

        </div>
    );
};

export default CompletedTask;