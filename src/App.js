import React from "react";
import "./App.css";
import Row from "./Row";
import Request from "./Request";
import Navbar from "./components/navbar/Navbar";
import Featured from "./components/featured/Featured";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Featured type="movies" />
      <Row
        title="NETFLIX ORIGINAL"
        fetchURL={Request.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now " fetchURL={Request.fetchTrending} />
      <Row title="Top Rated" fetchURL={Request.fetchTopRated} />
      <Row title="Action Movies" fetchURL={Request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={Request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={Request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={Request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchURL={Request.fetchDocumentaries} />
    </div>
  );
}

export default App;
