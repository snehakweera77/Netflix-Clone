import React from "react";
import "./Home.css";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Featured type="movies" />
      <List />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
}

export default Home;
