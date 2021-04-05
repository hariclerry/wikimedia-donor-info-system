const hostname = '127.0.0.1';
const port = 8000;

const server = require('./src/routes/routes');

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = server;