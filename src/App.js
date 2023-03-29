import React, { useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import InputForm from './components/InputForm';

function App() {
  const [movies,setMovies]=useState([]);
const[isLoading,setIsLoading]=useState(false);
const[error,setError]=useState();
function stopRetrying(){
setIsLoading(false);
}
 useEffect(()=>{
    fetchMovieHandler();
  },[])

  async function fetchMovieHandler(){
    setIsLoading(true);
    try{
 const response=await fetch('https://swapi.py4e.com/api/films/');
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
      <InputForm/>
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

