const { moviesService,} = require ('../services');
const {catchedAsync} = require('../utils');
const {response} = require('../utils');


const getMovies = async (req, res) => {
    
        const movies = await moviesService.getallMovies();
        //res.status(200).json(movies);          
        response(res, 200, movies);
};

const getMovieById = async (req, res) =>{
    const { id } = req.params;
    
        const movie = await moviesService.getMovieById(id);
       // res.status(200).json(movie);
        response(res, 200, movie);
   
};

module.exports = {
    getMovies: catchedAsync(getMovies), // seria la funcion que retorna catcedhAsync cuando le pasas getMovies
    getMovieById: catchedAsync(getMovieById), // seria la funcion que retorna catcedhAsync cuando le pasas getMoviesById
}