const Feedback = require('../models/Feedback');

exports.getAllFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createFeedback = async (req, res) => {
  const feedback = new Feedback({
    name: req.body.name,
    description: req.body.description,
  });

  try {
    const newFeedback = await feedback.save();
    res.status(201).json(newFeedback);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteFeedback = async (req, res) => {
  try {
    await Feedback.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: "Successfully Deleted Feedback" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
