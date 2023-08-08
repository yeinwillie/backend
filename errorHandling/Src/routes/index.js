const {Router} = require("express");
const {moviesControllers} = require ("../controllers");

const router = Router();



router.get("/movies", moviesControllers.getMovies);

router.get('/movies/:id',moviesControllers.getMovieById);

module.exports = router;