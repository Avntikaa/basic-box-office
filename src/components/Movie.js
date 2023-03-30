import React, { useEffect } from 'react';
import { useStateContext } from '../store/StateContext';

import classes from './Movie.module.css';

const Movie = (props) => {
const cxt=useStateContext();
 async  function deletemovie(id){
    console.log(props.id);
try{
await fetch(`https://react-box-58c06-default-rtdb.firebaseio.com/movies/${props.id}.json`,{
   method:'DELETE'
});

const newmovie=cxt.movies.filter((i)=>{
return (i.id!==props.id)}
)
cxt.setMovies(newmovie);
}
catch(error){
    console.log('error');
}  
}

  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <button onClick={()=>deletemovie(props.id)}>DELETE</button>
    </li>
  );
};

export default Movie;
