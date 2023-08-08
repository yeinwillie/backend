const response = (res, statusCode, data) =>{
    res.status(statusCode).json({
        error:false,                               // para informar al front que no hay error
        data,                                      // envia la data de la respuesta payload y/o otro
    });
};

// esta es un afuncion que simplifica la generación de respuestas JSON en la API de Express, para facilitar la lectura de 
// la informacion envidad al frontend

module.exports = response;