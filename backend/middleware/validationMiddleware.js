exports.validateFeedback = (req, res, next) => {
  const { name, description } = req.body;
  if (!name || !description) {
    return res.status(400).json({ message: 'Title and status are required' });
  }
  next();
};
