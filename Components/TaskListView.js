import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function TaskListView() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch tasks from Laravel backend
  useEffect(() => {
    fetch("http://localhost:8082/api/task")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch tasks");
        return res.json();
      })
      .then((data) => setTasks(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  // Delete a task
  const deleteTask = (id) => {
    fetch(`http://localhost:8082/api/task/${id}`, { method: "DELETE" })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to delete task");
        setTasks((prev) => prev.filter((task) => task.id !== id));
      })
      .catch((err) => alert(err.message));
  };

  if (loading) return <p>Loading tasks...</p>;
  if (error) return <p className="text-danger">Error: {error}</p>;

  return (
    <div>
      <h3 className="mb-3">Task List</h3>

      {tasks.length === 0 ? (
        <p className="text-muted">No tasks available.</p>
      ) : (
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
              <th>Due Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.title}</td>
                <td>{task.description || "—"}</td>
                <td>{task.status}</td>
                <td>{task.due_date || "—"}</td>
                <td>
                  {/* Edit Button */}
                  <Link
                    to={`/edit/${task.id}`}
                    className="btn btn-warning btn-sm me-2"
                  >
                    Edit
                  </Link>

                  {/* Delete Button */}
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TaskListView;
