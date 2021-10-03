import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Todo from '../Todo/Todo';
import './Todos.css';

const Todos = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(res => res.json())
            .then(data => setTodos(data));
    }, [])
    
    return (
      <div>
        <h1 className="fw-bold">To-Do</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>UserID</th>
              <th>ID</th>
              <th>Title</th>
              <th>Completed</th>
              <th></th>
            </tr>
          </thead>
            <tbody>
                {
                        todos.map(todo => <Todo
                            key={todo.id}
                            todo={todo}
                        ></Todo>)
                }
            </tbody>
        </Table>
      </div>
    );
};

export default Todos;