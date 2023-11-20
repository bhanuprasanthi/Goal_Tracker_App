
import React, { useState } from 'react';

const GoalList = ({ goals, onEditGoal, onToggleCompletion, onDeleteGoal }) => {
  const [editedContent, setEditedContent] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const handleEditClick = (index, content) => {
    setEditingIndex(index);
    setEditedContent(content);
  };

  const handleSaveEdit = (index) => {
    onEditGoal(index, { ...goals[index], content: editedContent });
    setEditingIndex(null);
  };

  return (
    <div className="goal-list">
      <h2>Goals</h2>
      <ul>
        {goals.map((goal, index) => (
          <li key={goal.id}>
            {editingIndex === index ? (
              <div>
                <input
                  type="text"
                  value={editedContent}
                  onChange={(e) => setEditedContent(e.target.value)}
                />
                <button onClick={() => handleSaveEdit(index)}>Save</button>
              </div>
            ) : (
              <div>
                <span className={goal.completed ? 'completed' : ''}>{goal.content}</span>
                <button onClick={() => handleEditClick(index, goal.content)}>Edit</button>
                <button onClick={() => onToggleCompletion(index)}>
                  {goal.completed ? 'Mark Incomplete' : 'Mark Complete'}
                </button>
                <button onClick={() => onDeleteGoal(index)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoalList;
