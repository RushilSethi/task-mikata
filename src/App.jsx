import { useState } from "react";
import CreateTodoButton from "./components/CreateTodoButton";
import TodoForm from "./components/TodoForm";
import Header from "./components/Header";

const App = () => {
  const [mode, setMode] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState([]);

  const updateTasks = (updatedTasks)=>{
    setTasks(updatedTasks);
  }

  return (
    <div className="bg-background text-primary min-h-screen flex flex-col items-center">
      <Header mode={mode} setMode={setMode}/>
      <div className="mt-3">
        <input
          placeholder="Search Todos"
          className="bg-container text-secondary w-[70vw] py-1 px-3 rounded-md focus:outline-none focus:ring-1"
        />
      </div>
      <TodoForm tasks={tasks} updateTasks={updateTasks} showModal={showForm} setShowModal={setShowForm}/>
      <CreateTodoButton showModal={showForm} setShowModal={setShowForm}/>
    </div>
  );
};

export default App;
