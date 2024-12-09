//Create web server
const express = require('express');
const app = express();

//Create a new comment
app.post('/comments', (req, res) => {
  res.send('Creating a new comment');
});

//Update a comment
app.put('/comments/:id', (req, res) => {
  res.send('Updating comment with id: ' + req.params.id);
});

//Delete a comment
app.delete('/comments/:id', (req, res) => {
  res.send('Deleting comment with id: ' + req.params.id);
});

//Start web server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});