import "./App.css";
import TodoList from "./components/todoList";
import InputField from "./components/inputField";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./store/todoSlice";

function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addTask = () => dispatch(addTodo({ text }), setText(""));

  return (
    <div className="App">
      <div className="todo-content">
        <h1 className="title first-title">ToDo application</h1>
        <h3 className="title second-title">To-do list for today</h3>
        <div className="todo-list-container">
          <TodoList />
        </div>
        <InputField text={text} setText={setText} addTodo={addTask} />
      </div>
    </div>
  );
}

export default App;
