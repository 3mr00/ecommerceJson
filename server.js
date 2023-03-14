const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./data/db.json");
const middlewares = jsonServer.defaults();
const cors = require("cors");

const port = process.env.PORT || 8080;

server.use(middlewares);
server.use(router);
server.use(cors());

server.listen(port);
