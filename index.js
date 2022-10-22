const http = require('http');
const { io } = require('socket.io-client');

const server = http.createServer();

const socket = io('http://localhost:3010');


socket.on('connect' , () => console.log(socket) ); 

socket.on('error' , () => console.log('error') );

server.listen(4010 , () => console.log('listening to port 4010') );