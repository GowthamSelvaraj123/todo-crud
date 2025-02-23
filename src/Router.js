import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodoList from './pages/TodoList';
import TodoForm from './pages/TodoForm';
import UpdateForm from './pages/UpdateForm';

export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<TodoList />} />
            <Route path="/addtask" element={<TodoForm />} />
            <Route path="/edittask/:id" element={<UpdateForm></UpdateForm>} />
        </Routes>
    </BrowserRouter>
  )
}
