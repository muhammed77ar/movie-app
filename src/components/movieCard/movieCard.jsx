import { CardContent, CardItem} from "./movieCardStyle";
import { FaStar } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import {Link} from "react-router-dom"
export default function MovieCard({data}) {
  return (
    
    <Link to={`/movie/:${data.imdbID}`}>
      <CardItem poster={data.Poster}>
        <CardContent>
          <div>
            <p className="title">{data.Title} ({data.Year})</p>
            <p className="type">{data.Type}</p>
            <div className="rating">
              <FaStar className="star" /><FaStar className="star" /><FaStar className="star" /><FaStar className="star" /><FaStar className="star" />
            </div>
            <div className="btns">
              <button className="details">details</button>
              <button className="watchLater">watch later</button>
            </div>
          </div>
        </CardContent>
      </CardItem>
    </Link>
   
  )
}
