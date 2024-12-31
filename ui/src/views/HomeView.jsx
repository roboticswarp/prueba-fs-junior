import { useEffect, useState } from "react";
import { getMovies } from "../services/moviesAPI";
import MovieCard from "../components/MovieCard";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const HomeView = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getMovies();
      setMovies(data);
      setFilteredMovies(data);
      setLoading(false);
    };
    fetchMovies();
  }, []);

  const handleSearch = (searchTerm) => {
    const lowercasedTerm = searchTerm.toLowerCase(); 
    const filtered = movies.filter(
      (movie) => movie.title.toLowerCase().includes(lowercasedTerm) 
    );
    setFilteredMovies(filtered);
  };
  if (loading) return <Loader />;

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {filteredMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onClick={() => navigate(`/movies/${movie.id}`)}
          />
        ))}
      </div>
    </>
  );
};

export default HomeView;
