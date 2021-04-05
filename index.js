const dotenv = require("dotenv");
const server = require("./src/routes/routes");

dotenv.config();

const hostname = "127.0.0.1";
const port = process.env.PORT || "8080";

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = server;