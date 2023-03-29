import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

function App() {
  const [movies,setMovies]=useState([]);
const[isLoading,setIsLoading]=useState(false);
const[error,setError]=useState();
function stopRetrying(){
setIsLoading(false);
}


  async function fetchMovieHandler(){
    setIsLoading(true);
    try{
 const response=await fetch('https://swapi.py4e.com/api/filmss/');
     const data=await response.json();

 if(!response.ok)
 {
  throw new Error('Something went Wrong......retrying');
 }
    setMovies(data.results);
           setIsLoading(false);
    }
  catch(error){
    setError(error.message);
    setTimeout(fetchMovieHandler,5000);
  }

  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
     {!isLoading && movies.length>0 && <MoviesList movies={movies} />}
     {isLoading && error && 
     <>
     <p>isLoading .... {error} <AiOutlineLoading3Quarters/></p>
     <button onClick={stopRetrying}>Stop</button>
     </>}
      </section>
    </React.Fragment>
  );
}

export default App;

