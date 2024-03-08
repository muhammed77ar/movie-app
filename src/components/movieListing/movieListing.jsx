import { useSelector } from "react-redux"
import { getAllMovies, getAllSeries } from "../../features/movies/movieSlice"
import MovieCard from "../movieCard/movieCard"
import { MovieContainer, MovieList, MovieWrapper } from "./movieListingStyle"

export default function MovieListing() {
  const movies = useSelector(getAllMovies)
  const series = useSelector(getAllSeries)
  let renderMovie, renderSeries = ""
  renderMovie = movies.Response === "True" ? (
    movies.Search.map((movie, key) => 
      (<MovieCard key={key} data={movie} />)
    )
  ) : (
    <div><h4 style={{color:"white"}}>{movies.Error}</h4></div>
  )
  renderSeries = series.Response === "True" ? (
    series.Search.map((serie, key) => 
      (<MovieCard key={key} data={serie} />)
    )
  ) : (
    <div><h4 style={{color:"white"}}>{series.Error}</h4></div>
  )
  return (
    <MovieWrapper>
      <h1 className="category">Movies</h1>
      <MovieList>
        <MovieContainer>
          {renderMovie}
        </MovieContainer>
      </MovieList>
      <h1 className="category">Series</h1>
      <MovieList>
        <MovieContainer>
          {renderSeries}
        </MovieContainer>
      </MovieList>
    </MovieWrapper>
    
  )
}
