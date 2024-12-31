import { BrowserRouter, Route, Routes } from "react-router";
import HomeView from "../views/HomeView";
import CreateMovieView from "../views/CreateMovieView";
import MovieDetailModal from "../views/MovieDetailView";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/create-movie" element={<CreateMovieView />} />
        <Route path="/movies/:id" element={<MovieDetailModal />} />
      </Routes>
    </BrowserRouter>
  );
};
