import './Todo.css';
import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Todo = (props) => {
    const { id, userId, title, completed } = props.todo;
    return (
        <>
    <tr>
        <td>{userId}</td>
        <td>{id}</td>
        <td>{title}</td>
        {
            completed ? 
                    <td>Completed</td>
                    :
                    <td>Not completed yet</td>
        }
        <NavLink to={`/todos/${id}`} className="nav-link text-white"><td><Button variant="primary">Details</Button>{' '}</td></NavLink>
    </tr>
    </>
    );
};

export default Todo;