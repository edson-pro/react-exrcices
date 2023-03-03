import { useEffect, useState } from "react";
import Task from "../components/Task";

const Todo = () => {
  const [value, setvalue] = useState("");
  const [taskList, setTaskList] = useState([]);

  const deleteTask = (id) => {
    setTaskList(taskList.filter((value) => value.id !== id));
  };
  const addTask = () => {
    const task = {
      id: taskList.length === 0 ? 1 : taskList[taskList.length - 1].id + 1,
      name: value,
    };
    setTaskList([...taskList, task]);
    setvalue("");
  };
  const editTask = (id, value) => {
    const newTast = taskList.map((task) =>
      task.id === id ? { ...task, name: value } : task
    );
    setTaskList(newTast);
    setvalue("");
    setTodoToEdit(null);
  };
  const [todoToEdit, setTodoToEdit] = useState();

  useEffect(() => {
    const todos = localStorage.getItem("todos");
    if (todos) {
      setTaskList(JSON.parse(todos) || []);
    }
  }, []);

  useEffect(() => {
    if (taskList.length) {
      localStorage.setItem("todos", JSON.stringify(taskList));
    }
  }, [taskList]);

  useEffect(() => {
    if (todoToEdit) {
      setvalue(todoToEdit.name);
    }
  }, [todoToEdit]);

  const handleEdit = (todo) => {
    setTodoToEdit(todo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoToEdit) {
      editTask(todoToEdit.id, value);
    } else {
      addTask();
    }
  };
  return (
    <section className="px-3 mt-40">
      <div className="max-w-2xl w-[36rem] mx-auto border border-gray-200 rounded-sm bg-white shadow-md space-y-10 grid py-16 px-8">
        <h1 className="mx-auto text-2xl tracking-wide text-gray-600 font-bold">
          TODOS
        </h1>

        <form onSubmit={handleSubmit} className="relative">
          <input
            className="w-full bg-slate-200 px-5 py-3 rounded-[4px] placeholder-gray-400"
            type="text"
            value={value}
            onChange={(e) => setvalue(e.target.value)}
            placeholder="e.g. eggs"
          />
          <button className="bg-blue-400 text-white h-full capitalize duration-300 font-semibold hover:bg-gray-500 px-4 py-1 rounded-r-lg absolute right-0">
            submit
          </button>
        </form>

        {taskList &&
          taskList.map((value, index) => {
            return (
              <Task
                edit={() => handleEdit(value)}
                key={index}
                id={index}
                deleteUser={() => deleteTask(value.id)}
                name={value.name}
              />
            );
          })}

        {!taskList?.length ? (
          <div className="p-10 flex justify-center items-center font-medium text-gray-600">
            {<div>No todos found</div>}
          </div>
        ) : null}
      </div>
    </section>
  );
};
export default Todo;
