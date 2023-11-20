// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

let goals = [];

app.get('/api/goals', (req, res) => {
  res.json(goals);
});

app.post('/api/goals', (req, res) => {
  const newGoal = req.body;
  newGoal.id = new Date().getTime(); // Assign a unique ID
  goals.push(newGoal);
  res.json(newGoal);
});

app.put('/api/goals/:id', (req, res) => {
  const goalId = req.params.id;
  const updatedGoal = req.body;

  goals = goals.map((goal) =>
    goal.id.toString() === goalId ? { ...goal, ...updatedGoal } : goal
  );

  res.json(updatedGoal);
});

app.delete('/api/goals/:id', (req, res) => {
  const goalId = req.params.id;
  goals = goals.filter((goal) => goal.id.toString() !== goalId);
  res.json({ message: 'Goal deleted successfully.' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
