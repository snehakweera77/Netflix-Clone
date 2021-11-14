import React, { useState, useEffect } from "react";
import "./Featured.scss";
import axios from "axios";
import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import { Link } from "react-router-dom";

function Featured({ type }) {
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
        </div>
      )}

      <img src={content.poster ? content.poster : content.img} alt="" />

      <div className="info">
        <h1>{content.title}</h1>
        <span className="desc">{content.desc}</span>
        <div className="buttons">
          <Link to={{ pathname: "/watch", movie: content }} className="link">
            <button className="play">
              <PlayArrow />
              <span>Play</span>
            </button>
          </Link>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
