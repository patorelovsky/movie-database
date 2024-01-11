import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MovieDetailPage from "./components/MovieDetailPage";
import MovieSearchPage from "./components/MovieSearchPage";
import ResponsiveAppBar, {
  ResponsiveAppBarNavMenuItem,
} from "./components/ResponsiveAppBar";
import { APP_TITLE, MOVIE_DETAIL_PATH } from "./utils/constants";
import MyFavoriteMoviesPage from "./components/MyFavoriteMoviesPage";

const movieSearchNavMenuItem: ResponsiveAppBarNavMenuItem = {
  label: "Movie Search",
  path: "/movie-search",
};
const myFavoriteMoviesNavMenuItem: ResponsiveAppBarNavMenuItem = {
  label: "My Favorite Movies",
  path: "/my-favorite-movies",
};
const navMenuItems: ResponsiveAppBarNavMenuItem[] = [
  movieSearchNavMenuItem,
  myFavoriteMoviesNavMenuItem,
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
          path={myFavoriteMoviesNavMenuItem.path}
          element={<MyFavoriteMoviesPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
