const cors= require('cors')
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Book = require('./models/projects');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
const uri= "mongodb+srv://"+process.env.URI_PASS+"@cluster0.8t0hk4y.mongodb.net/"+process.env.DATABASE
console.log(uri)
console.log(PORT)
app.use(cors())
app.use(bodyParser.json());


// Connect to the MongoDB database
const  dbcon=async(uri)=>{await mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(console.log("db on !")).catch(e=>{console.log(e)})}
// Define API routes
const bookRoutes = require('./routes/pRoutes');
app.use('/api/pf/', bookRoutes);
dbcon(uri);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
