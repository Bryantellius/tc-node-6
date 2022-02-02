const Task = ({ task, onClick }) => {
  const due = () => {
    let date = task.due_date ? new Date(task.due_date) : null;
    let today = new Date();

    if (!date) return date;

    if (today.toLocaleDateString() == date.toLocaleDateString()) {
      return `Due by ${date.toLocaleTimeString()}`;
    } else {
      return `Due on ${date.toLocaleDateString()}`;
    }
  };

  return (
    <div id={task.id} className="card" onClick={(e) => onClick(task.id)}>
      <span
        className={`float-top-right ${
          task.priority ? `priority-${task.priority}` : null
        }`}
      >
        {"!".repeat(task.priority)}
      </span>
      <div className="card-body">
        <p className={task.done ? "strike" : null}>{task.content}</p>
        <p>{due()}</p>
      </div>
    </div>
  );
};

export default Task;
