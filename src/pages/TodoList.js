import React, { useContext } from 'react'
import TodoContext from '../createStore';
import { Link, useParams } from 'react-router-dom';
export default function TodoList() {
  const {todoList} = useContext(TodoContext);
  const { id}  = useParams();
  const handleDelete = () => 
    {

    }
  return (
    <div>
    <Link to="/addtask">Add Task</Link>
      <h1>Todo List</h1>
      <table>
        <thead>
            <tr>
                <td>S.no</td>
                <td>Todo List</td>
                <td>Actions</td>
            </tr>
        </thead>
        <tbody>
            {todoList.length ? todoList.map((item, index) => (
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{item}</td>
            <td>
                <Link to={`/edittask/${index}`}>Edit</Link>
                <button style={{marginLeft:"10px"}} onClick={() => handleDelete(index)}>Delete</button>
            </td>
        </tr>
      )) : <tr><td>List Not Found</td></tr>}
        </tbody>
      </table>
    </div>
  )
}
