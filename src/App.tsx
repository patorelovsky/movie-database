import { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ResponsiveAppBar, {
  ResponsiveAppBarNavMenuItem,
} from "./components/ResponsiveAppBar";
import { APP_TITLE, MOVIE_DETAIL_PATH } from "./utils/constants";
import Loader from "./components/Loader";

const MovieDetailPage = lazy(() => import("./pages/MovieDetailPage"));
const MovieSearchPage = lazy(() => import("./pages/MovieSearchPage"));
const FavoriteMoviesPage = lazy(() => import("./pages/FavoriteMoviesPage"));

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
          element={
            <Suspense fallback={<Loader />}>
              <MovieSearchPage />
            </Suspense>
          }
        />
        <Route
          path={`${MOVIE_DETAIL_PATH}/:id`}
          element={
            <Suspense fallback={<Loader />}>
              <MovieDetailPage />
            </Suspense>
          }
        />
        <Route
          path={favoriteMoviesNavMenuItem.path}
          element={
            <Suspense fallback={<Loader />}>
              <FavoriteMoviesPage />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
