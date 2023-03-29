import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies,setMovies]=useState([]);

  async function fetchMovieHandler(){
   const response=await fetch('https://swapi.py4e.com/api/films/');
    const data=await response.json();
    console.log(data.results);
    setMovies(data.results)
   
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;