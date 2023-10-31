// index.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

// Database connection setup
mongoose.connect('mongodb+srv://tejavenkat940:VopmEcVm6eAs6QIv@iws.f9o7sox.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Define the schema and model for your data
const dataSchema = new mongoose.Schema({
  // Define your schema fields here
  // For example: name: String, value: Number
});
const Data = mongoose.model('Data', dataSchema);

// API endpoints for data manipulation
app.post('/data', async (req, res) => {
  // Create a new data entry
  // Implement the code for creating a new data entry here
});

app.put('/data/:id', async (req, res) => {
  // Update an existing data entry
  // Implement the code for updating an existing data entry here
});

app.delete('/data/:id', async (req, res) => {
  // Delete a data entry
  // Implement the code for deleting a data entry here
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

