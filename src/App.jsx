import { useEffect, useState } from "react";
import CreateTodoButton from "./components/CreateTodoButton";
import TodoForm from "./components/TodoForm";
import Header from "./components/Header";
import { getTasksFromLocalStorage, saveTasksToLocalStorage } from "./helpers/handle_local_storage.js";
import TodoList from "./components/TodoList/TodoList.jsx";
import EditForm from "./components/EditForm.jsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  const [mode, setMode] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [showEditForm, setShowEditForm] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

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

  function markTaskComplete(todoId) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === todoId) {
        if (task.status === "Done") {
          const newStatus = task.deadline && new Date(task.deadline) > new Date() ? "In Progress" : "Pending";
          return { ...task, status: newStatus };
        } else {
          return { ...task, status: "Done" };
        }
      }
      return task;
    });
  
    updateTasks(updatedTasks);
  }
  

  function editTask(todoId) {
    setTaskToEdit(tasks.find((task) => task.id === todoId));
    setShowEditForm(true);
  }

  function editTaskHelper(editedTodo){
    const updatedTasks = tasks.map((task) => {
      if (task.id === editedTodo.id) {
        return {
          ...task,
          ...editedTodo,
        };
      }
      return task;
    });
    updateTasks(updatedTasks);
  }

  function deleteTask(todoId) {
    const confirmToast = toast.warn(
      <div>
        <p>Are you sure you want to delete this task?</p>
        <div className="flex justify-around">
          <button
            onClick={() => {
              const updatedTasks = tasks.filter((task) => task.id !== todoId);
              toast.dismiss(confirmToast);
              updateTasks(updatedTasks);
              toast.success('Task deleted successfully!', { position: "top-center" });
            }}
            className="border-2 rounded-md p-1 border-red-500 text-red-500"
          >
            Yes, delete
          </button>
          <button
            onClick={() => toast.dismiss(confirmToast)}
            className="border-2 rounded-md p-1 border-blue-500 text-blue-500"
          >
            Cancel
          </button>
        </div>
      </div>,
      {
        position: "top-center",
        autoClose: false,
        closeOnClick: false,
        draggable: false,
      }
    );
  }
  
  return (
    <div className="bg-background text-primary min-h-screen flex flex-col items-center">
      <ToastContainer theme="dark"/>
      <Header mode={mode} setMode={setMode}/>
      <div className="mt-3">
        <input
          placeholder="Search Todos"
          className="mb-5 bg-container text-secondary w-[90vw] md:w-[70vw] py-1 px-3 rounded-md focus:outline-none focus:ring-1"
        />
      </div>
      <TodoList todos={tasks} onComplete={markTaskComplete} onDelete={deleteTask} onEdit={editTask}/>
      <EditForm taskToEdit={taskToEdit} showEditModal={showEditForm} setShowEditModal={setShowEditForm} editTaskHelper={editTaskHelper}/>
      <TodoForm tasks={tasks} updateTasks={updateTasks} showModal={showForm} setShowModal={setShowForm}/>
      <CreateTodoButton showModal={showForm} setShowModal={setShowForm}/>
    </div>
  );
};

export default App;
