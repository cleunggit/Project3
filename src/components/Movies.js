// import { useEffect, useState } from 'react';
// import axios from 'axios'

const Movies = (props) => {
  
  const image_URL = 'https://image.tmdb.org/t/p/original/'

  // destructure the movie object
  const { original_title, backdrop_path, overview } = props.movieObj

  return (
        <div className="movie__item">
          {/* <h2 className="movie__title">{original_title}</h2> */}
          <img className="movie__poster"
            src={`${image_URL}${backdrop_path}`}
            alt={original_title}
          />
          {/* <p className="movie__overview">{overview}</p> */}
        </div>
    // <div className="movie">
    //   <div className="movie__container">
    //   </div>
    // </div>
  );
};

export default Movies;