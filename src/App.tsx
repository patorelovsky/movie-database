import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Movie Search</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
