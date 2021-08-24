import React, { useState } from "react";
import "./styles.css";

const movies = {
  comedy: [
    { name: "3 Idiots ", rating: "8.4" },
    { name: "Hera Pheri", rating: "8.2" },
    { name: "The Hangover", rating: "7.7" }
  ],
  action: [
    { name: "The Dark Knight", rating: "9.0" },
    { name: "Avengers: Endgame", rating: "8.4" },
    { name: "John Wick", rating: "7.4" }
  ],
  scienceFiction: [
    { name: "Inception", rating: "8.8" },
    { name: "The Matrix", rating: "8.7" },
    { name: "Interstellar", rating: "8.6" }
  ]
};

export default function App() {
  const [genere, setGenere] = useState("action");

  function displayMovies(genere) {
    // console.log("clicked", genere);
    setGenere(genere);
  }

  return (
    <div className="App">
      <h1>🎬 goodmovies</h1>
      <p>Checkout my favorite Movies. Select a genre to get started</p>
      <div>
        <button onClick={() => displayMovies("action")}>Action</button>
        <button onClick={() => displayMovies("comedy")}>Comedy</button>
        <button onClick={() => displayMovies("scienceFiction")}>Sci Fi</button>
      </div>
      <hr />
      <div>
        <ul>
          {movies[genere].map((movie) => (
            <li key={movie.name}>
              <div className="movie-name">{movie.name}</div>
              <div className="rating"> IMDb Rating {movie.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
