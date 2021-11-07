import React, {useState, useEffect} from 'react';
import './Banner.css';
import axios from './axios';
import Request from './Request';

function Banner() {

    const [movie, setMovie] = useState([]);

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
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
                backgroundPosition: "center center",
            }}
        >
            <div className="banner__contents">
                <h1>{movie?.title || movie?.name || movie?.original_title}</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h2 className="banner__description">
                    {truncate(movie?.overview)}
                </h2>
                
            </div>

            <div className="banner--fadeBottom" />
        </header>
    )
}

export default Banner
