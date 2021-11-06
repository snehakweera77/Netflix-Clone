import React from "react";
import "./App.css";
import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/movies">
          <Home type="movies" />
        </Route>
        <Route path="/series">
          <Home type="series" />
        </Route>
      </Switch>
    </Router>

    /*<Row
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
      */
  );
}

export default App;
