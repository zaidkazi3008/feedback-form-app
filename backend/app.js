const express = require('express');
const cors = require('cors');
const app = express();
const feedbackRoutes = require('./routes/feedbackRoutes');
// const { validateTask } = require('./middleware/validationMiddleware');
require('./config/db');

app.use(cors());
app.use(express.json());
app.use('/api', feedbackRoutes);

app.listen(3001, () => console.log('Server running on port 3001'));
