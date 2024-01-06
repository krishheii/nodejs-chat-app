// Importing the required modules
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

// Serving the HTML file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Handling the connection event
io.on('connection', (socket) => {
  console.log('A user connected');

  // Handling the disconnection event
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });

  // Handling the chat message event
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
});

// Starting the server
http.listen(3000, () => {
  console.log('Server started on port 3000');
});
