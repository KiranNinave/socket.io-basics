const express = require("express");
const app = express();
const socketio = require("socket.io");

app.use(express.static(__dirname + "/public"));

const expressServer = app.listen(9000);
const io = socketio(expressServer, {
    path: 'socket.io',
    serveClient: true,
});

io.on("connection", (socket) => {
    socket.emit("messageFromServer", {
        data: "Welcome to the socketio server",
    });
    socket.on("messageToServer", (dataFromClient) => {
        console.log("dataFromClient", dataFromClient);
    });
});
