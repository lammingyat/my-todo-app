import { useState } from "react";

const TodoList = () => {

const todos = ["Buy groceries", "Clean the house", "Walk the dog"];
const listItems = todos.map((todo)=><h1>{todo}</h1>
);
  return (
    <div>{listItems}</div>
  )
}

export default TodoList
