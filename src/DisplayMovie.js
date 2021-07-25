const DisplayMovie = (props) => {
  
  // const {title, webImage} = props.movieObj

  const image_URL = 'https://image.tmdb.org/t/p/original/'

  // destructure the movie object
  const { original_title, backdrop_path, overview } = props.movieObj

  return (
    <div className="movie">
      <h2>{original_title}</h2>
      <img
        src={`${image_URL}${backdrop_path}`}
        alt=""
      />
      <p>{overview}</p>
    </div>
  );
};

export default DisplayMovie;