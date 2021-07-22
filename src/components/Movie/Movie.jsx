import React from 'react'
import MovieDetails from '../MovieDetails/MovieDetails';

import './Movie.css';

const baseEndpoint = 'http://www.omdbapi.com/';

const Movie = () => {

  const [title, setTitle] = React.useState('');
  const [movieDetails, setMovieDetails] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  const onInputChange = (event) => {
    if(event.target.value !== '') {
      const title = event.target.value.trim();
      setTitle(title);
    }
  }


  const searchByTitle = () => {
    setIsLoading(true);
    fetch(`${baseEndpoint}?apikey=922db138&t=${title}`)
      .then(response => response.json())
      .then(response => {
        setIsLoading(false);
        if(response.Response === "False") {
          setIsError(true);
        } else {
          setIsError(false);
          setMovieDetails({...response});
        }
      });    
  }

  return (
    <section>
      <div className='input-button-cont'>
        <input type='text' placeholder='Search by title' onChange={onInputChange} value={title}></input>
        <button onClick={searchByTitle}>Search</button>
      </div>
      {!isLoading && !isError && Object.keys(movieDetails).length > 0 && <MovieDetails movieDetails={movieDetails}/>}
      {isError && (
        <div>Movie not found!</div>
      )}
    </section>
  )
}

export default Movie;