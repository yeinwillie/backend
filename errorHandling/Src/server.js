const express = require ("express");
const morgan = require("morgan");

const server = express();
server.use(morgan("dev"));
server.use(express.json());

server.use(require("./routes")); // se usa solo routes ya que esta en el index de la carpeta

server.use((err, req, res, next ) =>{
    res.status(err.statusCode).json({
        error:true,
        message:err.message,
    });
});

module.exports = server;