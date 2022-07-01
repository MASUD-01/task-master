import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form';

const UpdateUser = () => {
    const { id } = useParams()
    const [user, setUser] = useState([])
    const { register, handleSubmit } = useForm();
    console.log(user)
    useEffect(() => {
        fetch(`https://enigmatic-castle-67715.herokuapp.com/update/${id}`)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])

    const onSubmit = data => {
        const task = data.firstName
        const tasks = { task }
        console.log(tasks)
        //send to your database
        fetch(`https://enigmatic-castle-67715.herokuapp.com/task/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(tasks)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                alert('task atask')
            })
    };
    return (
        <div className='wide'>
            <h2 className='text-2xl'>Update your Task: {user.task}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="input input-bordered w-full max-w-xs" placeholder='add task' {...register("firstName")} />
                <input className="btn" type="submit" />
            </form>
        </div>
    );
};

export default UpdateUser;