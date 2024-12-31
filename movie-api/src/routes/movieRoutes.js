const express = require('express');
const { createMovie, getMovies, getMovieById } = require('../controllers/movieController');
const upload = require('../middlewares/upload');
const router = express.Router();

router.post('/', upload.single('image'), createMovie);
router.get('/', getMovies);
router.get('/:id', getMovieById);

module.exports = router;
