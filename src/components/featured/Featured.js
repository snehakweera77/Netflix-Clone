import React, { useState, useEffect } from "react";
import "./Featured.css";
import axios from "../../axios";
import Request from "../../Request";
import { InfoOutlined, PlayArrow } from "@material-ui/icons";

function Featured({ type }) {
  const [movie, setMovie] = useState([]);
  const url = "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(Request.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * (request.data.results.length - 1))
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substring(0, n - 1) + "..." : str;
  }
  return (
    <header
      className="featured"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
        backgroundPosition: "center center",
      }}
    >
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genre" id="category__genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}

      <img className="featured__img" src={`${url}`} alt="" />
      <div className="featured__info">
        <h1>{movie?.title || movie?.name || movie?.original_title}</h1>
        <h2 className="featured__description">{truncate(movie?.overview)}</h2>
        <div className="featured__button">
          <button className="featured__button__play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="featured__button__more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>

      <div className="featured--fadeBottom" />
    </header>
  );
}

export default Featured;
