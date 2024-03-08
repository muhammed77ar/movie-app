import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer"
import Home from "./components/home/home"
import MovieDetails from "./components/movieDetails/movieDetails"
import NotFoundPage from "./components/notFoundPage/notFoundPage"
import { GlobalStyle } from "./AppStyle";
export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:imdbID" element={<MovieDetails />} />
        <Route path="/notFoundPage" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
