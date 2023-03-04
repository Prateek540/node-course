const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const port = process.env.PORT;
const publicDirectoryPath = path.join(__dirname, "../public");

app.use(express.static(publicDirectoryPath));

let count = 0;

io.on("connection", (socket) => {
  console.log("New websocket connection");

  socket.emit("message", "Welcome!!!");
  socket.broadcast.emit("message", "A new user joined");

  socket.on("messageSend", (messageData, callback) => {
    io.emit("message", messageData);
    callback();
  });

  socket.on("sendLocation", (coords, callback) => {
    io.emit(
      "locationMessage",
      `https://google.com/maps?q=${coords.latitude},${coords.longitude}`
    );
    callback();
  });

  socket.on("disconnect", () => {
    io.emit("message", "A user got disconnected");
  });
});

server.listen(port, () => {
  console.log("Server running at " + port);
});
