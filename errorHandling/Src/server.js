const express = require ("express");
const morgan = require("morgan");
const resError = require("./utils/resError");

const server = express();
server.use(morgan("dev"));
server.use(express.json());

server.use(require("./routes")); // se usa solo routes ya que esta en el index de la carpeta

server.use((err, req, res, next ) =>{
    const {statusCode, message} = err;
    resError(res,statusCode, message);
}); // middlerware que toma el error y muestra el mensaje de error propagado por el mismo, solo modifica como se muestra
    // la respuesta en un json. util para quitar la traza del error que se envia al usuario

module.exports = server;