import { useState } from "react";
import "./app.css";

function App() {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    if (task === "" || date === "") return;
    const newTodo = {
      id: Date.now(),
      task: task,
      date: date,
    };

    setTodos([...todos, newTodo]);
    setTask("");
    setDate("");
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <>
      <div className="main-div">
        <div className="container">
          <div className="row">
            <input
              type="text"
              placeholder="Enter to do here"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <button className="btn add-btn" onClick={handleAdd}>
              Add
            </button>
          </div>
          {todos.map((todo) => (
            <div className="row">
              <span>{todo.task}</span>
              <span>{todo.date}</span>
              <button
                className="btn delete-btn"
                onClick={() => handleDelete(todo.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
