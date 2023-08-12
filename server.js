const cors= require('cors')
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Book = require('./models/projects');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors)
app.use(bodyParser.json());
const uri="mongodb+srv://simran:rohit776@cluster0.8t0hk4y.mongodb.net/rohitdbs"
// Connect to the MongoDB database
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(console.log("db on hii !"))

// Define API routes
const bookRoutes = require('./routes/pRoutes');
app.use('/api/pf/', bookRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
