import React from "react";

const MovieDetails = ({movieDetails}) => {

  const {Title, Year, Plot, Genre} = movieDetails;

  const renderGenre = React.useCallback(() => {
    return Genre && Genre.split(',').map(genre => {
      return (
        <div key={genre}>{genre}</div>
      )
    })
  }, [Genre])

  return (
    <section>
      <div>{Title}</div>
      <div>{Year}</div>
      <div>{Plot}</div>
      {renderGenre()}
    </section>
  )
}

export default MovieDetails;