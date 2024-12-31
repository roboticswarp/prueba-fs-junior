import axios from "axios";

const API_URL = "http://localhost:4000/movies";

export const getMovies = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getMovieById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};
export const getMoviesFilter = async (searchTerm = "") => {
  const response = await axios.get(API_URL, {
    params: { search: searchTerm },
  });
  return response.data;
};
export const createMovie = async (movieData) => {
  const response = await axios.post(API_URL, movieData);
  return response.data;
};
