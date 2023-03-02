const socket = io();

socket.on("message", (messageData) => {
  console.log(messageData);
});

document.querySelector("#message").addEventListener("submit", (event) => {
  event.preventDefault();
  const message = event.target.elements.message.value;
  socket.emit("messageSend", message);
});
