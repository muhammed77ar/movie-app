import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchAsyncDetails, getAllDetails, removeDetails} from "../../features/movies/movieSlice"
import { CardSection, CardWrapper, LeftSection, Loader, RightSection } from "./movieDetailsStyle"
import { FaStar } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidCameraMovie } from "react-icons/bi";
import { FaCalendar } from "react-icons/fa6";
import { TbChairDirector } from "react-icons/tb";
import { FaUser } from "react-icons/fa6";
import { IoLanguage } from "react-icons/io5";
import { FaAward } from "react-icons/fa";

export default function MovieDetails() {
  const {imdbID} = useParams()

  const cleanedImdbID = imdbID.replace(/[^a-zA-Z0-9]/g, "");
  
  const dispatch = useDispatch()
  const details = useSelector(getAllDetails)

  useEffect(() =>{
    dispatch(fetchAsyncDetails(cleanedImdbID))
    return () =>{
      dispatch(removeDetails())
    }
  }, [dispatch, cleanedImdbID])
  return (
    <CardWrapper>
      {Object.keys(details).length === 0 ?
      <Loader>
      <div class="loader">
        <div class="loader__filmstrip">
        </div>
        <p class="loader__text">
          loading
        </p>
      </div>
    </Loader>
      :
      <>
      <CardSection>
      <RightSection poster={details.Poster}>
      </RightSection>
      <LeftSection>
        <div className="left">
            
            <h1 className="Title">{details.Title}</h1>
            <button className="watchLater">watch later</button>
            
        
        <div className="details1">
          <span className="rating">IMDB Rating <FaStar className="star" /> : {details.imdbRating}</span>
          <span className="vote">IMDB Votes <BiSolidLike className="like" />: {details.imdbVotes}</span>
          <span className="runTime">Runtime <BiSolidCameraMovie className="run" />: {details.Runtime}</span>
          <span className="year">Year <FaCalendar className="cal" />: {details.Year}</span>
        </div>
        <div className="story">
          {details.Plot}
        </div>
        <div className="details2">
          <span className="director">Director: {details.Director}</span>
          <span className="actors">Actors : {details.Actors}</span>
          <span className="actors">Genre : {details.Genre}</span>
          <span className="actors">Language : {details.Language}</span>
          <span className="actors">Awards : {details.Awards}</span>
        </div>
        </div>
      </LeftSection>
      </CardSection>
      </>
      }
    </CardWrapper>
  
  )
}
