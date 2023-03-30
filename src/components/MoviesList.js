import React from 'react';

import Movie from './Movie';
import classes from './MoviesList.module.css';
import { useStateContext } from '../store/StateContext';

const MovieList = (props) => {
const cxt=useStateContext();
  return (
    <ul className={classes['movies-list']}>
      {cxt.movies.map((movie) => (
        <>
        <h2>{movie.id}</h2>
        <Movie
          id={movie.id}
          title={movie.title}
          releaseDate={movie.Date}
          openingText={movie.desc}
        />
        </>
      ))}
    </ul>
  );
};

export default MovieList;
