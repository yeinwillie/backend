const resError = (res, status, message) => {
    res.status(status).json({
        error:true,                    // para informar al front que hay un error
        message,                        // enviar info para enteder el tipo de error
    });
};

// esta es un afuncion que simplifica el error en la API de Express, para facilitar la lectura de la informacion envidad 
// al frontend
// 
module.exports = resError;