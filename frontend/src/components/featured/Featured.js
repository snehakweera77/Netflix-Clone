import React, { useState, useEffect } from "react";
import "./Featured.css";
import axios from "axios";
import { InfoOutlined, PlayArrow } from "@material-ui/icons";

function Featured({ type, setGenre }) {
  const [content, setContent] = useState({});

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`/movies/random?type=${type}`, {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setContent(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomContent();
  }, [type]);
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select
            name="genre"
            id="category__genre"
            onChange={(e) => setGenre(e.target.value)}
          >
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

      <img className="featured__img" src={content.img} alt="" />
      <div className="featured__info">
        <img className="featured__info__title" src={content.imgTitle} alt="" />{" "}
        <h2 className="featured__description">{content.desc}</h2>
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
    </div>
  );
}

export default Featured;
