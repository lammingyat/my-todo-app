import { useState } from "react";

const TodoButton = () => {
    const [Todo, setTodo] = useState("nothing");
    
  const handlechange = (event) => {
    setTodo(event.target.value);
  };
  
    return (
      <div>
        <p>you just set as {Todo}</p>
        <button onClick={() => setTodo("Buy groceries")} style={{color:"red"}} >
          Click me to set as 'Buy groceries'
        </button>
        <button onClick={() => setTodo("Clean the house")}>
          Click me to set as 'Clean the house'
        </button>
        <button onClick={() => setTodo("Walk the dog")}>
          Click me to set as 'Walk the dog'
        </button>
        <br/>
        Type the textbox to set as <input type="text" id="todo" onChange={handlechange}></input>
      </div>
    );
  }

  export default TodoButton