const catchedAsync = (fn) => {
    return (req, res, next) => {
        fn (req, res).catch((err) => next(err));
    }
};

// Es una funcion de orden superior (funcion que recibe una funcion y/o retorna una funcion) que ejecuta el controlador, 
// recibe la funcion (que viene del controlador) y ejecuta la 
// funcion pasando el error catheado al manejador de errores de express
// recibe la funcion que en este caso seria las que vienen del controlador y le da la habilidad de autochatchearse
// Puede la funcion manejar sus propios errores y dar libertad a los otros ser manejados por next en la funcion orden superios
//

module.exports = catchedAsync;
