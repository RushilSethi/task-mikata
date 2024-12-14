import { useEffect, useState } from "react";
import CreateTodoButton from "./components/CreateTodoButton";
import TodoForm from "./components/TodoForm";
import Header from "./components/Header";
import { getTasksFromLocalStorage, saveTasksToLocalStorage } from "./helpers/handle_local_storage.js";
import TodoList from "./components/TodoList/TodoList.jsx";

const App = () => {
  const [mode, setMode] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState([]);

  const updateTasks = (updatedTasks)=>{
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  }

  useEffect(()=>{
    setTasks(getTasksFromLocalStorage());
  },[])

  useEffect(() => {
    const updateTaskStatuses = () => {
      const now = new Date();
      const updatedTasks = tasks.map((task) => {
        if (task.status === "Done") {
          return task;
        }
        const taskDeadline = new Date(task.deadline);
        const newStatus = taskDeadline > now ? "In Progress" : "Pending";
        return task.status === newStatus ? task : { ...task, status: newStatus };
      });

      if (JSON.stringify(updatedTasks) !== JSON.stringify(tasks)) {
        updateTasks(updatedTasks);
      }
    };

    updateTaskStatuses();

    const interval = setInterval(updateTaskStatuses, 60000);

    return () => clearInterval(interval);
  }, [tasks]);

  return (
    <div className="bg-background text-primary min-h-screen flex flex-col items-center">
      <Header mode={mode} setMode={setMode}/>
      <div className="mt-3">
        <input
          placeholder="Search Todos"
          className="mb-5 bg-container text-secondary w-[90vw] md:w-[70vw] py-1 px-3 rounded-md focus:outline-none focus:ring-1"
        />
      </div>
      <TodoList todos={tasks} />
      <TodoForm tasks={tasks} updateTasks={updateTasks} showModal={showForm} setShowModal={setShowForm}/>
      <CreateTodoButton showModal={showForm} setShowModal={setShowForm}/>
    </div>
  );
};

export default App;
