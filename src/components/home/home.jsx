import { useEffect } from "react"

import { useDispatch } from "react-redux"
import {fetchAsyncMovies, fetchAsyncSeries } from "../../features/movies/movieSlice"
import MovieListing from "../movieListing/movieListing"
import { Hero, Container } from "../header/headerStyle"


export default function Home() {

  const dispatch = useDispatch()
  useEffect(()=>{
    const movieText = "spider man"
    const serieText = "dark"
    dispatch(fetchAsyncMovies(movieText))    
    dispatch(fetchAsyncSeries(serieText))
  }, [dispatch])
  return (<>
  <div></div>
  <Hero>
      <Container>
        <div>
          <h1>welcome to movie night</h1>
          <p>Here you will find the best movies and series</p>
          <button >go to watch</button>
        </div>
      </Container>
  </Hero>
  <MovieListing />
  </>
    
  )
}
