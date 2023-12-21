import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ListTasks from "./components/ListTasks";
import CreateTask from "./components/CreateTask";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="bg-slate-100 w-screen h-screen flex flex-col items-center p-3 gap-16 pt-32">
        <h1 className="text-[30px] text-red-700">
          Build Todo App With React-Dnd and Tailwind
        </h1>
        <CreateTask tasks={tasks} setTasks={setTasks} />
        <ListTasks tasks={tasks} setTasks={setTasks} />
      </div>
    </DndProvider>
  );
}

export default App;
