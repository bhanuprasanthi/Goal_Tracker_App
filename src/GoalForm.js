
import React, { useState } from 'react';

const GoalForm = ({ onAddGoal }) => {
  const [content, setContent] = useState('');

  const handleAddGoal = () => {
    if (content.trim() !== '') {
      const newGoal = {
        id: new Date().getTime(),
        content,
        completed: false,
      };
      onAddGoal(newGoal);
      setContent('');
    }
  };

  return (
    <div className="goal-form">
      <input
        type="text"
        placeholder="Enter your goal..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleAddGoal}>Add Goal</button>
    </div>
  );
};

export default GoalForm;
