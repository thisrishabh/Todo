"use client"
import { addTodo } from '@/features/todo/todoSlice';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const AddTodo = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addHandler = (e: any) => {
        e.preventDefault();
        dispatch(addTodo(input))
        setInput('')
    }

    return (
        <form onSubmit={addHandler} className="w-full max-w-sm mx-auto px-4 py-2">
            <div className="flex items-center border-b-2 border-teal-500 py-2">
                <input
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text" placeholder="Add a task" value={input} onChange={(e) => setInput(e.target.value)} />
                <button
                    className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                    type="submit">
                    Add
                </button>
            </div>
        </form>
    )
}

export default AddTodo
