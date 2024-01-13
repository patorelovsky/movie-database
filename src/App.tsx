import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MovieDetailPage from "./pages/MovieDetailPage";
import MovieSearchPage from "./pages/MovieSearchPage";
import ResponsiveAppBar, {
  ResponsiveAppBarNavMenuItem,
} from "./components/ResponsiveAppBar";
import { APP_TITLE, MOVIE_DETAIL_PATH } from "./utils/constants";
import FavoriteMoviesPage from "./pages/FavoriteMoviesPage";

const movieSearchNavMenuItem: ResponsiveAppBarNavMenuItem = {
  label: "Movie Search",
  path: "/movie-search",
};
const favoriteMoviesNavMenuItem: ResponsiveAppBarNavMenuItem = {
  label: "My Favorite Movies",
  path: "/favorite-movies",
};
const navMenuItems: ResponsiveAppBarNavMenuItem[] = [
  movieSearchNavMenuItem,
  favoriteMoviesNavMenuItem,
];

function App() {
  return (
    <BrowserRouter>
      <ResponsiveAppBar title={APP_TITLE} navMenuItems={navMenuItems} />
      <Routes>
        <Route
          path="/"
          element={<Navigate replace to={movieSearchNavMenuItem.path} />}
        />
        <Route
          path={movieSearchNavMenuItem.path}
          element={<MovieSearchPage />}
        />
        <Route
          path={`${MOVIE_DETAIL_PATH}/:id`}
          element={<MovieDetailPage />}
        />
        <Route
          path={favoriteMoviesNavMenuItem.path}
          element={<FavoriteMoviesPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
