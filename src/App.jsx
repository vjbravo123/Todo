import { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/TodoList";
import "./App.css"

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {

    if (text.trim() === "") return;

    const newTask = { id: Date.now(), text, completed: false};
    
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map((task) =>task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id, newText) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, text: newText } : task));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br bg-blue-300 p-6">
      <Header addTask={addTask} />
      <ToDoList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} editTask={editTask}/>
    </div>
  );
}

export default App;
