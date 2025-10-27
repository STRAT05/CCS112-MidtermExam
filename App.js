import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import TaskListView from "./Components/TaskListView";
import AddTaskView from "./Components/AddTaskView";
import EditTaskView from "./Components/EditTaskView"; // ✏️ NEW: import edit view

function App() {
  const [tasks, setTasks] = useState([]);       // Task list state
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null);     // Error state

  // 🔹 Fetch tasks from backend API when app loads
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

  // 🔹 Add a new task (POST request)
  const addTask = async (newTask) => {
    try {
      const response = await fetch("http://localhost:8082/api/task", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTask),
      });

      if (!response.ok) throw new Error("Failed to add task");

      const createdTask = await response.json();
      setTasks((prev) => [...prev, createdTask]); // Update state
    } catch (err) {
      alert(err.message);
    }
  };

  // 🔹 Delete a task (DELETE request)
  const deleteTask = async (id) => {
    try {
      const response = await fetch(`http://localhost:8082/api/task/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete task");

      // Remove task from UI
      setTasks((prev) => prev.filter((task) => task.id !== id));
    } catch (err) {
      alert(err.message);
    }
  };

  // 🔹 Update an existing task (PUT request)
  const updateTask = async (id, updatedTask) => {
    try {
      const response = await fetch(`http://localhost:8082/api/task/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTask),
      });

      if (!response.ok) throw new Error("Failed to update task");

      const updated = await response.json();

      // Update task in local state
      setTasks((prev) =>
        prev.map((task) => (task.id === id ? updated : task))
      );
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <Router>
      {/* Always show the Navbar */}
      <Navbar />

      <div className="container mt-4">
        {loading ? (
          <p>Loading tasks...</p>
        ) : error ? (
          <p className="text-danger">Error: {error}</p>
        ) : (
          <Routes>
            {/* ✅ View All Tasks */}
            <Route
              path="/"
              element={<TaskListView tasks={tasks} deleteTask={deleteTask} />}
            />

            {/* ✅ Add New Task */}
            <Route path="/add" element={<AddTaskView addTask={addTask} />} />

            {/* ✏️ Edit Existing Task */}
            <Route
              path="/edit/:id"
              element={<EditTaskView updateTask={updateTask} />}
            />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
