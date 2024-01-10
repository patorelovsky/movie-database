import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResponsiveAppBar, {
  ResponsiveAppBarNavMenuItem,
} from "./components/ResponsiveAppBar";
import MovieSearch from "./components/MovieSearch";

const APP_TITLE = "Movie Database";

const movieSearchNavMenuItem: ResponsiveAppBarNavMenuItem = {
  label: "Movie Search",
  path: "./movie-search",
};
const navMenuItems: ResponsiveAppBarNavMenuItem[] = [movieSearchNavMenuItem];

function App() {
  return (
    <BrowserRouter>
      <ResponsiveAppBar title={APP_TITLE} navMenuItems={navMenuItems} />
      <Routes>
        <Route path="/" element={<MovieSearch />} />
        <Route path={movieSearchNavMenuItem.path} element={<MovieSearch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
