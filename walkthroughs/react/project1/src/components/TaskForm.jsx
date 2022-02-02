const TaskForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="content">
          Task<sup>*</sup>
        </label>
        <input type="text" name="content" id="content" required />
      </div>
      <div className="form-group">
        <label htmlFor="priority">Priority</label>
        <select name="priority" id="priority">
          <option value="0">None</option>
          <option value="1">!</option>
          <option value="2">!!</option>
          <option value="3">!!!</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="due_date">Date</label>
        <input type="datetime-local" name="due_date" id="due_date" />
      </div>
      <div className="form-group">
        <button type="submit">Add Task</button>
      </div>
    </form>
  );
};

export default TaskForm;
