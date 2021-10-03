import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { TodosContext } from '../../App';
import Todo from '../Todo/Todo';
import './Todos.css';

const Todos = () => {
  const searchedItems = useContext(TodosContext);
  const { searched } = searchedItems;
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(res => res.json())
          .then(data => {
            setTodos(data);
            setSearch(data);
          });
    }, [])

  const [search, setSearch] = useState([]);
  useEffect(() => {
    const newItems = todos.filter(todo => todo.title.toLowerCase().includes(searched.toLowerCase()));
    setSearch(newItems);
  },[searched])
    
    return (
      <div>
        <h1 className="fw-bold my-5">To-Do's</h1>
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
                        search.map(todo => <Todo
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