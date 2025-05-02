const express = require('express');
const app = express();
const PORT = 5000;

// Middleware to parse JSON
app.use(express.json());

// In-memory task storage
let tasks = [];

// GET: Retrieve all tasks
app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

// POST: Create a new task
app.post('/api/tasks', (req, res) => {
  const task = { id: tasks.length + 1, title: req.body.title, completed: false };
  tasks.push(task);
  res.status(201).json(task);
});

// DELETE: Delete a task by ID
app.delete('/api/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  tasks = tasks.filter(task => task.id !== id);
  res.status(204).send();
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));