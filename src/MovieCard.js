import React from 'react';

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <div className="movie-card">
      <img src={posterURL} alt={`${title} poster`} className="poster-url" />
      <div className="movie-info">
        <h4>{title}</h4>
        <p>{description}</p>
        <p>Rating: {rating}/10</p>
      </div>
    </div>
  );
};

export default MovieCard;