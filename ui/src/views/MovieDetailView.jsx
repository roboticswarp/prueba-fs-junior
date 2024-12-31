import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMovieById } from '../services/moviesAPI';
import Loader from '../components/Loader';
import { motion } from 'framer-motion';

const MovieDetailModal = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      const data = await getMovieById(id);
      setMovie(data);
      setLoading(false);
    };
    fetchMovie();
  }, [id]);

  const closeModal = () => {
    navigate(-1); 
  };

  if (loading) return <Loader />;

 
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  const modalVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } },
    exit: { scale: 0.8, opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={closeModal} 
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div
        className="bg-white rounded-lg shadow-lg w-full max-w-3xl p-6 relative"
        onClick={(e) => e.stopPropagation()}
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
       
        <motion.button
          className="absolute top-4 right-4 text-gray-600 hover:text-black"
          onClick={closeModal}
          whileHover={{ scale: 1.2, rotate: 90, color: '#000' }}
          whileTap={{ scale: 0.9 }}
        >
          ✖
        </motion.button>

       
        <img
          src={movie.image}
          alt={movie.title}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
        <p className="text-gray-600 mb-4">
          {movie.genre} - {movie.year}
        </p>
        <p className="text-gray-800 mb-4">{movie.synopsis}</p>
        <h3 className="text-lg font-bold mb-2">Cast:</h3>
        <ul className="list-disc list-inside">
          {movie.cast.map((actor) => (
            <li key={actor}>{actor}</li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default MovieDetailModal;
