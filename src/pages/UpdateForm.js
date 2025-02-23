import React, { useContext, useState } from 'react';
import TodoContext from '../createStore';
import { useNavigate, useParams } from 'react-router-dom';

export default function UpdateForm() {
    const [formData, setFormData] = useState("");
    const {todoList, setTodoList} = useContext(TodoContext);
    const navigate = useNavigate();
    const {id} = useParams();
    const currentData = todoList.find((item) => item.id === id);
    setFormData(currentData);
    console.log(id);
    console.log(todoList);
    const handleChange = (event) =>
    {
      setFormData(event.target.value);
    }
    const handleSubmit = (event) =>
    {
      event.preventDefault();
      if(formData){
        setTodoList();
        setFormData("");
        console.log(todoList);
      }
      else
      {
          alert("empty data successfully");
      }
    }
  return (
    <div style={{paddingTop:"20px"}}>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter Your Todo" name="todoname" onChange={handleChange} value={todoList}  />
            <input type="submit" />
        </form>
    </div>
  )
}
