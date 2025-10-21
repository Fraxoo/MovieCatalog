import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />          {/* page d’accueil */}
        <Route path="/movie/:id" element={<Movie />} /> {/* page détail film */}
      </Routes>
    </BrowserRouter>
  );
}
