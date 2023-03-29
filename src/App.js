import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

function App() {
  const [movies,setMovies]=useState([]);
const[isLoading,setIsLoading]=useState(false);
  async function fetchMovieHandler(){
    setIsLoading(true);
   const response=await fetch('https://swapi.py4e.com/api/films/');
    const data=await response.json();
    setMovies(data.results)
       setIsLoading(false);

  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
     {!isLoading && movies.length>0 && <MoviesList movies={movies} />}
     {isLoading && <p>isLoading .... <AiOutlineLoading3Quarters/></p>}
      </section>
    </React.Fragment>
  );
}

export default App;
