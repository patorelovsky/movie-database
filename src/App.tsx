import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetailPage from "./components/MovieDetailPage";
import MovieSearchPage from "./components/MovieSearchPage";
import ResponsiveAppBar, {
  ResponsiveAppBarNavMenuItem,
} from "./components/ResponsiveAppBar";

const APP_TITLE = "Movie Database";

const MOVIE_DETAIL_PATH = "movie-detail";

const movieSearchNavMenuItem: ResponsiveAppBarNavMenuItem = {
  label: "Movie Search",
  path: "/movie-search",
};
const navMenuItems: ResponsiveAppBarNavMenuItem[] = [movieSearchNavMenuItem];

function App() {
  return (
    <BrowserRouter>
      <ResponsiveAppBar title={APP_TITLE} navMenuItems={navMenuItems} />
      <Routes>
        <Route path="/" element={<MovieSearchPage />} />
        <Route
          path={movieSearchNavMenuItem.path}
          element={<MovieSearchPage />}
        />
        <Route
          path={`${MOVIE_DETAIL_PATH}/:id`}
          element={<MovieDetailPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
