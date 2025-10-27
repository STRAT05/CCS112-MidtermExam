import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditTaskView() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "pending",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Fetch task data by ID
  useEffect(() => {
    fetch(`http://localhost:8082/api/task/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch task details");
        return res.json();
      })
      .then((data) => setFormData(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaving(true);
    setError(null);

    fetch(`http://localhost:8082/api/task/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to update task");
        return res.json();
      })
      .then(() => {
        alert("Task updated successfully!");
        navigate("/");
      })
      .catch((err) => setError(err.message))
      .finally(() => setSaving(false));
  };

  if (loading) return <p>Loading task...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div>
      <h3 className="mb-3">Edit Task</h3>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            name="description"
            value={formData.description || ""}
            onChange={handleChange}
            className="form-control"
            rows="3"
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="form-select"
          >
            <option value="pending">Pending</option>
            <option value="in progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <button type="submit" className="btn btn-success" disabled={saving}>
          {saving ? "Updating..." : "Update Task"}
        </button>
      </form>
    </div>
  );
}

export default EditTaskView;
