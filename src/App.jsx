import { useState } from "react";
import ToggleButton from "./components/ToggleButton";
import CreateTodoButton from "./components/CreateTodoButton";
import TodoForm from "./components/TodoForm";

const App = () => {
  const [mode, setMode] = useState(true);
  const [showForm, setShowForm] = useState(false);
  console.log(showForm)

  return (
    <div className="bg-background text-primary min-h-screen flex flex-col items-center">
      <ToggleButton mode={mode} setMode={setMode} />
      <div className="mt-3">
        <input
          placeholder="Search Todos"
          className="bg-container text-secondary w-[70vw] py-1 px-3 rounded-md focus:outline-none focus:ring-1"
        />
      </div>
      {/* <div>
        <div>Title</div>
        <div>Date</div>
      </div> */}
      <TodoForm showModal={showForm} setShowModal={setShowForm}/>
      <CreateTodoButton showModal={showForm} setShowModal={setShowForm}/>
    </div>
  );
};

export default App;
