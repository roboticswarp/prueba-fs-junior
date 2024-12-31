import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ onSearch }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <nav className="bg-blue-600 text-white p-4 flex flex-wrap items-center justify-between">
      <div className="flex items-center">
        <h1
          className="text-xl font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          Movie Manager
        </h1>
      </div>
      <div className="flex items-center gap-4">
        <form onSubmit={handleSearch} className="flex items-center">
          <input
            type="text"
            placeholder="Buscar películas..."
            className="p-2 rounded-l bg-blue-500 text-white placeholder-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-700 px-4 py-2 rounded-r text-white hover:bg-blue-800 ml-2"
          >
            Buscar
          </button>
        </form>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={() => navigate("/create-movie")}
        >
          Crear Película
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
