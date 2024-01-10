import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResponsiveAppBar, {
  ResponsiveAppBarNavMenuItem,
} from "./components/ResponsiveAppBar";
import MovieSearchPage from "./components/MovieSearchPage";

const APP_TITLE = "Movie Database";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
