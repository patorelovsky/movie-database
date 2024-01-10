import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResponsiveAppBar, {
  ResponsiveAppBarNavMenuItem,
} from "./components/ResponsiveAppBar";

const APP_TITLE = "Movie Database";

const navMenuItems: ResponsiveAppBarNavMenuItem[] = [];

function App() {
  return (
    <BrowserRouter>
      <ResponsiveAppBar title={APP_TITLE} navMenuItems={navMenuItems} />
      <Routes>
        <Route path="/" element={<div>Movie Search</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
