const { ClientError } = require("../utils/errors");

const data =  
    [
        {
            id:1,
            title:'titanic',
        },
        {
            id:2,
            title:'Spiderman',
        },
        {
            id:3,
            title:'Huevo Cartoons',
        }
    ];

const getallMovies = async () => {
    return data;
 };


const getMovieById = async (id) => {
    const movie = data.find((e) => (e.id) == id);
   // if (!movie) throw Error ('Invalid Id');                  // EXPRESS MANEJA EL ERROR Y LO ASIGNA COMO 500 Y ES UN ERROR DEL CLIENTE
   if (!movie) throw new ClientError('Invalid ID');   // SE MANEJA EL ERROR CON LA FUNCION CLIENTeRROR Y SE ASIGNA COMO 400
    return movie;
}

module.exports = {
    getallMovies,
    getMovieById,
}