import { LinearProgress } from "@mui/material";
import { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ResponsiveAppBar, {
  ResponsiveAppBarNavMenuItem,
} from "./components/ResponsiveAppBar";

const MovieDetailPage = lazy(() => import("./pages/MovieDetailPage"));
const MovieSearchPage = lazy(() => import("./pages/MovieSearchPage"));
const FavoriteMoviesPage = lazy(() => import("./pages/FavoriteMoviesPage"));

export const MOVIE_DETAIL_PATH = "/movie-detail";

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
      <ResponsiveAppBar
        title={process.env.REACT_APP_SITE_TITLE as string}
        navMenuItems={navMenuItems}
      />
      <Routes>
        <Route
          path="/"
          element={<Navigate replace to={movieSearchNavMenuItem.path} />}
        />
        <Route
          path={movieSearchNavMenuItem.path}
          element={
            <Suspense fallback={<LinearProgress />}>
              <MovieSearchPage />
            </Suspense>
          }
        />
        <Route
          path={`${MOVIE_DETAIL_PATH}/:id`}
          element={
            <Suspense fallback={<LinearProgress />}>
              <MovieDetailPage />
            </Suspense>
          }
        />
        <Route
          path={favoriteMoviesNavMenuItem.path}
          element={
            <Suspense fallback={<LinearProgress />}>
              <FavoriteMoviesPage />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
