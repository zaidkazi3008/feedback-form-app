import React, { useState, useEffect } from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import api from './services/api';

const App = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await api.get('/feedbacks');
        setFeedbacks(response.data);
      } catch (error) {
        console.error('Error fetching Feedbacks:', error);
      }
    };
    fetchFeedbacks();
  }, []);

  const addFeedback = async (newFeedback) => {
    try {
      const response = await api.post('/feedbacks', newFeedback);
      setFeedbacks([...feedbacks, response.data]);
    } catch (error) {
      console.error('Error adding Feedback:', error);
    }
  };

  const deleteFeedback = async (id) => {
    try {
      await api.delete(`/feedbacks/${id}`);
      const updatedFeedbacks = feedbacks.filter((feedback) => feedback._id !== id);
      setFeedbacks(updatedFeedbacks);
    } catch (error) {
      console.error('Error deleting Feedback:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 mt-4 max-w-lg mx-auto text-center ">Feedback Form</h1>
      <FeedbackForm addFeedback={addFeedback} />
      <FeedbackList
        feedbacks={feedbacks}
        deleteFeedback={deleteFeedback}
      />
    </div>
  );
};

export default App;
