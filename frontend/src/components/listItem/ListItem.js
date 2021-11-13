import React, { useEffect, useState } from "react";
import "./ListItem.scss";
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
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const request = await axios.get("/movies/find/" + item, {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setMovie(request.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <Link to={{ pathname: "/watch", movie: movie }}>
      <div
        className="listItem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={movie?.img} alt="" />
        {isHovered && (
          <>
            <video src={movie.trailer} autoPlay={true} loop muted={true} />
            <div className="itemInfo">
              <div className="itemInfoTop">
                <div className="icons">
                  <PlayArrow className="icon" />
                  <Add className="icon" />
                  <ThumbUpAltOutlined className="icon" />
                  <ThumbDownOutlined className="icon" />
                </div>
                <div className="itemInfoMisc">
                  <span>{movie.duration}</span>
                  <span className="limit">+{movie.limit}</span>
                  <span>{movie.year}</span>
                </div>
              </div>
              <div className="title">{movie.title}</div>
              <div className="desc">{truncate(movie.desc, 150)}</div>
              <div className="genres">
                {movie.genres?.map((genre) => (
                  <p>{genre}</p>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}

export default ListItem;
