import React, { useEffect, useState } from "react";
import "./ListItem.css";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import axios from "axios";

function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const request = await axios.get("/movies/find" + item, {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setMovies(request.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);

  return (
    <Link to={{ pathname: "/watch", movie: movie }}>
      <div
        className="listItem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img className="listItem__img" src={movie.img} alt="" />
        {isHovered && (
          <>
            <video src={movie.trailer} autoPlay={true} loop />
            <div className="listItem__info">
              <div className="listItem__info__icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownOutlined className="icon" />
              </div>
              <div className="listItem__info__top">
                <span>{movie.duration}</span>
                <span className="listItem__info__top__limit">
                  {movie.limit}
                </span>
                <span>{movie.year}</span>
              </div>
              <div className="listItem__info__desc">{movie.desc}</div>
              <div className="listItem__info__genre">{movie.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}

export default ListItem;
