import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';

const TodoDetails = () => {
    const { todoId } = useParams({});
    const history = useHistory();
    const [todo, setTodo] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
            .then(res => res.json())
            .then(data => setTodo(data));
    }, []);
    const { userId, id, title, completed } = todo;
    const handleOnBack = () => {
        history.push('/todos');
    }

    return (
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
          <tr>
            <td>{userId}</td>
            <td>{id}</td>
            <td>{title}</td>
            {completed ? <td>Completed</td> : <td>Not completed yet</td>}
            <td>
              <Button onClick={handleOnBack} variant="primary">Back</Button>{" "}
            </td>
          </tr>
        </tbody>
      </Table>
    );
};

export default TodoDetails;