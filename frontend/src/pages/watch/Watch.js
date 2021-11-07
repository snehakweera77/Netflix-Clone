import React from "react";
import "./Watch.css";
import { ArrowBackOutlined } from "@material-ui/icons";

function Watch() {
  return (
    <div className="watch">
      <div className="watch__back">
        <ArrowBackOutlined />
        Home
      </div>
      <iframe
        src="https://www.youtube.com/embed/oqxAJKy0ii4"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; loop;autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>{" "}
    </div>
  );
}

export default Watch;
