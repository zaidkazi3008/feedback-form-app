import React from 'react';

const FeedbackList = ({ feedbacks, deleteFeedback }) => {
  return (
    <ul className="mt-4 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4 mt-4 max-w-lg mx-auto text-center ">Feedback List</h1>
      {feedbacks.map((feedbacks) => (
        <li key={feedbacks._id} className="mb-2 p-4 border border-gray-400 rounded">
          
          <div>Name: {feedbacks.name}</div>
          <div>Description: {feedbacks.description}</div>
          <div className="mt-2 flex items-center">
            <button
              onClick={() => deleteFeedback(feedbacks._id)}
              className="bg-red-500 text-white py-2 px-4 rounded"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackList;
