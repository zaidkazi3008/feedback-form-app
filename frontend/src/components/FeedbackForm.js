import React, { useState } from 'react';

const FeedbackForm = ({ addFeedback }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    addFeedback({ name, description });
    setName('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 max-w-lg mx-auto">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-gray-400 p-2 mb-2 w-full"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border border-gray-400 p-2 mb-2 w-full"
      ></textarea>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded block w-full">
        Add Feedback
      </button>
    </form>
  );
};

export default FeedbackForm;
