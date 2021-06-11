const http = require("http");
const socketio = require("socket.io");

const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Request-Method", "*");
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
    res.setHeader("Access-Control-Allow-Headers", "*");
    if (req.method === "OPTIONS") {
        res.writeHead(200);
        res.end();
        return;
    }
    res.end("I am connected");
});

const io = socketio(server);

io.on("connection", (socket, req) => {
    socket.emit("welcome", "Welcome to socket.io");
    socket.on("message", (msg) => {
        console.log("message", msg);
    });
});

server.listen(8000);
