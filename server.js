const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const server = express();

server.use(helmet());
server.use(express.json());
server.use(morgan("short"));

const carRouter = require("./cars/carRouter");
server.use("/api/cars", carRouter);

module.exports = server;
