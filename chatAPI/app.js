const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.send('Hello world!');
    // https://itnext.io/build-a-group-chat-app-in-30-lines-using-node-js-15bfe7a2417b
});

io.sockets.on('connection', function (socket) {
    console.log("socket connection made");
    socket.on('new-message', (message) => {
        console.log(message);
    })
    // socket.on('username', function (username) {
    //     socket.username = username;
    //     io.emit('is_online', '🔵 <i>' + socket.username + ' join the chat..</i>');
    // });

    // socket.on('disconnect', function (username) {
    //     io.emit('is_online', '🔴 <i>' + socket.username + ' left the chat..</i>');
    // })

    // socket.on('chat_message', function (message) {
    //     io.emit('chat_message', '<strong>' + socket.username + '</strong>: ' + message);
    // });

});

const server = http.listen(8080, function () {
    console.log('http://localhost:8080');
});