const http = require("http");
const websocket = require("ws");

const server = http.createServer((req, res) => {
    res.end("I am connected!");
});

const wss = new websocket.Server({ server });

// print websocket headers and modify if required to
wss.on("headers", (headers, req) => {
    console.log("headers", headers);
});

// after establishing connection send and reciving messages from server
wss.on("connection", (ws, req) => {
    ws.send("welcome to the websocket connection");

    ws.on("message", (msg) => {
        console.log("msg", msg);
    });
});

server.listen(8000);
