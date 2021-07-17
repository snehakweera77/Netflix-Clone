import React from 'react';
import './App.css';
import Row from './Row';
import Request from './Request';
import Nav from './Nav';
import Banner from './Banner';
function App() {
  return (
    <div className="app">

      <Nav />
      <Banner />
      <Row title="NETFLIX ORIGINAL" fetchURL={Request.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending Now " fetchURL={Request.fetchTrending} />
      <Row title="Top Rated" fetchURL={Request.fetchTopRated} />
      <Row title="Action Movies" fetchURL={Request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={Request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={Request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={Request.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchURL={Request.fetchDocumentaries}/>

    </div>
  );
}

export default App;