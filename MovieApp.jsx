import { useState, useEffect } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import MovieCard from "./MovieCard";
import useDebounced from "./hooks/useDebounced";
const movieAPI = "http://www.omdbapi.com?apikey=b6003d8a";
function MovieApp() {
  const [searchMovie, setSearchMovie] = useState("");
  const [movies, setMovies] = useState([]);
  const debounced = useDebounced(searchMovie, 1000);
  async function getMovie(title) {
    const response = await fetch(`${movieAPI}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }
  useEffect(() => {
    if(!debounced.trim()) {
      return;
    }
    getMovie(debounced)
  },[debounced]) 
  return (
    <div>
      <h1>Movie Land</h1>
      <div className="search">
        <input
          type="text"
          value={searchMovie}
          onChange={(e) => setSearchMovie(e.target.value)}
        />
        <button>
          <FaMagnifyingGlass/>
        </button>
      </div>
      {movies.map((movie, index) => (
        <div className="container">
          <MovieCard key={index} data={movie} />
        </div>
      ))}
    </div>
  );
}

export default MovieApp;
