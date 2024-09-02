"use client"
import { removeTodo } from '@/features/todo/todoSlice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { MdDeleteOutline } from "react-icons/md";

const Todos = () => {
    const todos = useSelector((state: any) => state.todos)
    const dispatch = useDispatch()

    return (
        <>
            <div>Todos</div>
            <ul className="divide-y divide-gray-200 py-4">
                {todos.length > 0 ? todos.map((todo: any) => (
                    <li className="" key={todo.id}>
                        <div className="flex items-center">
                        <span className="text-lg font-bold text-gray-900">•</span>
                            <label htmlFor="todo1" className="ml-3 block text-gray-900 flex items-cente">
                                <span className="text-lg font-medium text-teal-900">{todo.text}</span>
                                <button onClick={() => dispatch(removeTodo(todo.id))}  className="ml-4 text-red-500 hover:text-red-700">
                                    <MdDeleteOutline size={24}/>
                                </button>
                            </label>
                        </div>
                    </li>
                )): <p>No Todos</p>}
            </ul>
        </>
    )
}

export default Todos