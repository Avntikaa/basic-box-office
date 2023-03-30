import React, { useEffect, useState ,useCallback} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import InputForm from './components/InputForm';
import { useStateContext } from './store/StateContext';

function App() {
  const cxt=useStateContext();
useEffect(()=>{
    cxt.fetchMovieHandler();
  },[cxt.fetchMovieHandler])

 
  return (
    <>
      <InputForm />
      <section>
        <button onClick={cxt.fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
     {!cxt.isLoading && cxt.movies.length>0 && <MoviesList/>}
     {cxt.isLoading && cxt.error && 
     <>
     <p>isLoading .... {cxt.error} <AiOutlineLoading3Quarters/></p>
     <button onClick={cxt.stopRetrying}>Stop</button>
     </>}
      </section>
      </>
  );
}

export default App;

