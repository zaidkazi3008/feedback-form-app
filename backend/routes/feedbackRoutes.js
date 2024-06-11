const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedbackController');
const { validateFeedback } = require('../middleware/validationMiddleware');

router.get('/feedbacks', feedbackController.getAllFeedbacks);
router.post('/feedbacks', validateFeedback, feedbackController.createFeedback);
router.delete('/feedbacks/:id', feedbackController.deleteFeedback);

module.exports = router;
