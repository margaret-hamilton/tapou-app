require('dotenv').config();

const http = require('http');

const index = require('./app.js');

const PORT = process.env.PORT || 4567;

const server = http.createServer(index);

server.listen(PORT);
// eslint-disable-next-line no-console
console.log(`Server now running on port: ${PORT}`);

module.exports = server;
