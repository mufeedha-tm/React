import React, { useState, useEffect } from "react";
import "./TodoApp.css";

const STORAGE_KEY = "react_todo_tasks";

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        setTasks(JSON.parse(raw));
      }
    } catch (e) {
      console.error("Failed to parse tasks from localStorage", e);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const newTask = {
      id: Date.now().toString(),
      text: trimmed,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTasks((t) => [newTask, ...t]);
    setText("");
  };

  const removeTask = (id) => {
    const ok = window.confirm("Delete this task? This cannot be undone.");
    if (!ok) return;
    setTasks((t) => t.filter((task) => task.id !== id));
    if (editingId === id) {
      setEditingId(null);
      setEditingText("");
    }
  };

  const toggleComplete = (id) => {
    setTasks((t) =>
      t.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const startEdit = (task) => {
    setEditingId(task.id);
    setEditingText(task.text);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditingText("");
  };

  const saveEdit = (id) => {
    const trimmed = editingText.trim();
    if (!trimmed) {
      alert("Task text cannot be empty.");
      return;
    }
    setTasks((t) => t.map((task) => (task.id === id ? { ...task, text: trimmed } : task)));
    setEditingId(null);
    setEditingText("");
  };

  const pending = tasks.filter((t) => !t.completed);
  const completed = tasks.filter((t) => t.completed);

  const handleKeyAdd = (e) => {
    if (e.key === "Enter") addTask();
  };

  return (
    <div className="todo-page">
      <div className="todo-card">
        <h2 className="todo-title">Tasks</h2>

        <div className="todo-input-row">
          <input
            type="text"
            className="todo-input"
            placeholder="What task is pending / what work are you doing?"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyAdd}
          />
          <button
            className="todo-btn add-btn"
            onClick={addTask}
            disabled={!text.trim()}
            title={!text.trim() ? "Enter a task first" : "Add task"}
          >
            Add
          </button>
        </div>

        <div className="lists">
          <section className="list-section">
            <h3 className="list-title">Pending ({pending.length})</h3>
            <ul className="task-list">
              {pending.length === 0 && <li className="empty">No pending tasks</li>}
              {pending.map((task) => (
                <li key={task.id} className="task-item">
                  <input
                    type="checkbox"
                    className="task-checkbox"
                    checked={task.completed}
                    onChange={() => toggleComplete(task.id)}
                  />

                  {editingId === task.id ? (
                    <>
                      <input
                        className="task-edit-input"
                        value={editingText}
                        onChange={(e) => setEditingText(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") saveEdit(task.id);
                          if (e.key === "Escape") cancelEdit();
                        }}
                        autoFocus
                      />
                      <div className="task-actions">
                        <button className="task-btn save" onClick={() => saveEdit(task.id)}>Save</button>
                        <button className="task-btn cancel" onClick={cancelEdit}>Cancel</button>
                      </div>
                    </>
                  ) : (
                    <>
                      <span className="task-text">{task.text}</span>
                      <div className="task-actions">
                        <button className="task-btn edit" onClick={() => startEdit(task)}>Edit</button>
                        <button className="task-btn delete" onClick={() => removeTask(task.id)}>Delete</button>
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </section>

          <section className="list-section">
            <h3 className="list-title">Completed ({completed.length})</h3>
            <ul className="task-list">
              {completed.length === 0 && <li className="empty">No completed tasks</li>}
              {completed.map((task) => (
                <li key={task.id} className="task-item">
                  <input
                    type="checkbox"
                    className="task-checkbox"
                    checked={task.completed}
                    onChange={() => toggleComplete(task.id)}
                  />

                  {editingId === task.id ? (
                    <>
                      <input
                        className="task-edit-input"
                        value={editingText}
                        onChange={(e) => setEditingText(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") saveEdit(task.id);
                          if (e.key === "Escape") cancelEdit();
                        }}
                        autoFocus
                      />
                      <div className="task-actions">
                        <button className="task-btn save" onClick={() => saveEdit(task.id)}>Save</button>
                        <button className="task-btn cancel" onClick={cancelEdit}>Cancel</button>
                      </div>
                    </>
                  ) : (
                    <>
                      <span className="task-text completed">{task.text}</span>
                      <div className="task-actions">
                        <button className="task-btn edit" onClick={() => startEdit(task)}>Edit</button>
                        <button className="task-btn delete" onClick={() => removeTask(task.id)}>Delete</button>
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
