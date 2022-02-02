import { useState } from "react";
import Task from "../components/Task";
import TaskForm from "../components/TaskForm";

const Tasks = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      content: "Practice Code",
      priority: 3,
      done: false,
      due_date: null,
    },
  ]);

  const handleTaskDone = (id) => {
    let newTasks = tasks.map((task) => {
      if (id == task.id) {
        task.done = !task.done;
        document.getElementById(id).classList.toggle("done");
      }

      return task;
    });

    setTasks(newTasks);
  };

  const handleTaskCreation = (event) => {
    event.preventDefault();

    let content = document.querySelector("#content");
    let priority = document.querySelector("#priority");
    let due_date = document.querySelector("#due_date");

    let task = {
      id: tasks[tasks.length - 1].id + 1 || 1,
      content: content.value,
      priority: priority.value,
      done: false,
      due_date: due_date.value,
    };

    let newTasks = Array.from(tasks);

    newTasks.push(task);

    setTasks(newTasks);

    content.value = "";
    priority.value = "0";
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <TaskForm onSubmit={handleTaskCreation} />
      <div className="task-container">
        {tasks.map((task) => {
          return <Task key={task.id} task={task} onClick={handleTaskDone} />;
        })}
      </div>
    </div>
  );
};

export default Tasks;
