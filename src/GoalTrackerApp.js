// GoalTrackerApp.js
import React, { useState } from 'react';
import GoalForm from './GoalForm';
import GoalList from './GoalList';
import './GoalTrackerApp.css';

const GoalTrackerApp = () => {
  const [goals, setGoals] = useState([]);

  const addGoal = (newGoal) => {
    setGoals([...goals, newGoal]);
  };

  const editGoal = (index, updatedContent) => {
    const updatedGoals = [...goals];
    updatedGoals[index] = updatedContent;
    setGoals(updatedGoals);
  };

  const toggleCompletion = (index) => {
    const updatedGoals = [...goals];
    updatedGoals[index].completed = !updatedGoals[index].completed;
    setGoals(updatedGoals);
  };

  const deleteGoal = (index) => {
    const updatedGoals = [...goals];
    updatedGoals.splice(index, 1);
    setGoals(updatedGoals);
  };

  return (
    <div className="goal-tracker-app">
      <h1>Goal Tracker</h1>
      <GoalForm onAddGoal={addGoal} />
      <GoalList
        goals={goals}
        onEditGoal={editGoal}
        onToggleCompletion={toggleCompletion}
        onDeleteGoal={deleteGoal}
      />
    </div>
  );
};

export default GoalTrackerApp;
