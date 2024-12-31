const { Movie } = require("../models");

const createMovie = async (req, res, next) => {
  try {
    const { title, year, genre, synopsis, cast } = req.body;
    const castArray = (() => {
      if (Array.isArray(cast)) {
        return cast;
      }
      if (typeof cast === "string") {
        try {
         
          const parsed = JSON.parse(cast);
          if (Array.isArray(parsed)) {
            return parsed.map((actor) => actor.trim());
          }
        } catch {
         
          return cast
            .split(",")
            .map((actor) => actor.trim().replace(/^["']|["']$/g, ""));
        }
      }
      return []; 
    })();

    console.log("Cast recibido:", cast);
    console.log("Cast procesado:", castArray);

    
    const image = req.file
      ? `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`
      : null;
    const newMovie = await Movie.create({
      title,
      year,
      genre,
      synopsis,
      cast: castArray,
      image,
    });
    res.status(201).json(newMovie);
  } catch (error) {
    next(error);
  }
};

const getMovies = async (req, res, next) => {
  try {
    const movies = await Movie.findAll({
      attributes: ["id", "title", "year", "genre", "image"],
    });
    res.json(movies);
  } catch (error) {
    next(error);
  }
};

const getMovieById = async (req, res, next) => {
  try {
    const movie = await Movie.findByPk(req.params.id);
    if (!movie)
      return res.status(404).json({ message: "Película no encontrada" });
    res.json(movie);
  } catch (error) {
    next(error);
  }
};

module.exports = { createMovie, getMovies, getMovieById };
