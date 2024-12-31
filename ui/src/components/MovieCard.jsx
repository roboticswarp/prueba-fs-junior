const MovieCard = ({ movie, onClick }) => (
  <div className="p-4 bg-gray-100 rounded shadow cursor-pointer" onClick={onClick}>
    <img src={movie.image} alt={movie.title} className="w-full h-48 object-cover rounded" />
    <h2 className="text-lg font-bold mt-2">{movie.title}</h2>
    <p className="text-sm text-gray-600">{movie.genre}</p>
  </div>
);

export default MovieCard;
