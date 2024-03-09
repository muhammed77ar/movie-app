import { Link } from "react-router-dom";
import { Headerr, Icon, Icon2, Logo, NavMenu, NavMenuItems, NavMenuToggel} from "./headerStyle";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useRef, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncSeries } from "../../features/movies/movieSlice";

export default function Header() {
  const [open, setOpen] = useState(false)
  const refMovie = useRef()
  const refSerie = useRef()
  const dispatch = useDispatch()

  const toggelSidebar = () => setOpen(!open)
  
  const handelSubmitMovie = (e) =>{
    e.preventDefault()
    dispatch(fetchAsyncMovies(refMovie.current.value.trim()))
    setOpen(!open)
  }
  const handelSubmitSerie = (e) =>{
    e.preventDefault()
    dispatch(fetchAsyncSeries(refSerie.current.value.trim()))
    setOpen(!open)
  }


  return (<>
    <Headerr>
      <Link to={"/"}>
      <Logo src="../images/logo-no-background.svg" />
      </Link>
      <Icon>
        <IoMenu onClick={toggelSidebar} />
      </Icon>
    </Headerr>
    <NavMenu isOpen={open}>
      <ul className="navMenuItems">
        <li className="navMenutoggel">
          <IoClose onClick={toggelSidebar} />
        </li>
        <li className="searchBar">
          <form action=""  onSubmit={handelSubmitMovie}>
          <label htmlFor="">Search for a movie:</label>
            <input type="text" placeholder="Search a movie" ref={refMovie} autoFocus/>
            <button type="submit" style={{border:"none"}}>
              <IoSearchOutline className="searchIcon" />
              </button>
          </form>
        </li>
        <li className="Or">
          <div class="line-container">
            <div class="line"></div>
            <div class="or">or</div>
            <div class="line"></div>
          </div>
        </li>
        <li className="searchBar">
          <form action=""  onSubmit={handelSubmitSerie}>
          <label htmlFor="">Search for a serie:</label>
            <input type="text" placeholder="Search a serie" ref={refSerie} autoFocus/>
            <button type="submit" style={{border:"none"}}>
              <IoSearchOutline className="searchIcon" />
              </button>
          </form>
        </li>
      </ul>
    </NavMenu>
  </>
  )
}
