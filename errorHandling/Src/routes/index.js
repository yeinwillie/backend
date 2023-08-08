const {Router} = require("express");
const {moviesControllers} = require ("../controllers");
const validateName = require("../middlerware/validateName");

const router = Router();


router.get("/movies", validateName, moviesControllers.getMovies);

router.get('/movies/:id',moviesControllers.getMovieById);

module.exports = router;