import AddButton from './AddButton';

const Movies = (props) => {
  
  const image_URL = 'https://image.tmdb.org/t/p/original/'

  const { movies } = props
  // destructure the movie object

  return (
    <section className="trending">
      <div className="trending__container">
        <h2 className="trending__title">NOW PLAYING</h2>
        <div className="movie">
          {
            movies.map( (movie) => {
              return (
                <div className="movie__container" key={movie.id}>
                  <img className="movie__poster"
                    src={image_URL + movie.backdrop_path}
                    alt={movie.original_title}
                  />
                  <div className="movie__overlay">
                    <p className="movie__title">{movie.title || movie.name}</p>
                    <AddButton />
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  );
};

export default Movies;