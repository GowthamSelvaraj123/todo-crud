import React, { useContext, useState } from 'react';
import TodoContext from '../createStore';
import { useNavigate } from 'react-router-dom';

export default function TodoForm() {
  const [formData, setFormData] = useState("");
  const {todoList, setTodoList} = useContext(TodoContext);
  const navigate = useNavigate();
  const handleChange = (event) =>
  {
    setFormData(event.target.value);
    console.log(formData);
  }
  const handleSubmit = (event) =>
  {
    event.preventDefault();
    if(formData){
    setTodoList([...todoList, formData]);
    setFormData("");
    console.log(todoList);
    navigate('/');
    }
    else
    {
        alert("empty data successfully");
    }
  }
  return (
    <div style={{paddingTop:"20px"}}>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter Your Todo" name="todoname" onChange={handleChange} value={formData}  />
            <input type="submit" />
        </form>
    </div>
  )
}
