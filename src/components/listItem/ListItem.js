import React, { useEffect, useState } from "react";
import "./ListItem.css";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

function ListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false);
  //const [movie, setMovie] = useState({});
  const [movies, setMovies] = useState([]);
  const trailer = "https://www.youtube.com/embed/oqxAJKy0ii4";

  /*useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);*/
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        className="listItem__img"
        src="https://upload.wikimedia.org/wikipedia/en/d/dd/Squid_Game.jpg"
        alt=""
      />
      {isHovered && (
        <>
          <iframe
            src="https://www.youtube.com/embed/oqxAJKy0ii4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; loop;autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>{" "}
          <div className="listItem__info">
            <div className="listItem__info__icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>
            <div className="listItem__info__top">
              <span>1 hour 14 mins</span>
              <span className="listItem__info__top__limit">+16</span>
              <span>1999</span>
            </div>
            <div className="listItem__info__desc">
              mnbvdgfhgjbkljbhgvcxjjbhvgcdsjljsaijfihncxzjjohytftyxm
            </div>
            <div className="listItem__info__genre">Action</div>
          </div>
        </>
      )}
      {/*<img src={movie?.imgSm} alt="" />
        {isHovered && (
          <>
            <video src={movie.trailer} autoPlay={true} loop />
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownOutlined className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>{movie.duration}</span>
                <span className="limit">+{movie.limit}</span>
                <span>{movie.year}</span>
              </div>
              <div className="desc">{movie.desc}</div>
              <div className="genre">{movie.genre}</div>
            </div>
          </>
        )}*/}
    </div>
  );
}

export default ListItem;
