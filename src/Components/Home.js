import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const Home = () => {
    const { register, handleSubmit } = useForm();
    const [parts, setParts] = useState([])
    // console.log(parts)

    useEffect(() => {
        fetch('https://enigmatic-castle-67715.herokuapp.com/task', {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => setParts(data))
    }, [parts]);
    const onSubmit = data => {
        const task = data.firstName
        const tasks = { task }
        console.log(tasks)
        //send to your database
        fetch('https://enigmatic-castle-67715.herokuapp.com/task', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(tasks)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                alert('task added')
            })
    };

    const handledelete = (id, tas) => {
        console.log(id, tas)
        const name = { tas }
        fetch(`https://enigmatic-castle-67715.herokuapp.com/task/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {


                    fetch('https://enigmatic-castle-67715.herokuapp.com/completed', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',

                        },
                        body: JSON.stringify(name)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                        })
                }
            })

    }


    return (
        <div className='wide'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="input input-bordered w-full max-w-xs" placeholder='add task' {...register("firstName")} />
                <input className="btn" type="submit" />
            </form>
            <div className='list-div'>

                {
                    parts.map(task => <ol><li key={task._id} onClick={() => handledelete(task._id, task.task)}> <input type="checkbox" checked="checked" className="checkbox checkbox-xs" /> {task.task}</li></ol>)

                }
            </div>


        </div>
    );
};

export default Home;