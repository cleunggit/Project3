import './styles/scss/App.css'
import Navbar from './components/Navbar';
import Banner from './components/Hero';
import Movies from './components/Movies';
import axios from 'axios'
import { useEffect, useState } from 'react'



function App() {
  // initialize state
  const [ movieArr, setMovieArr ] = useState([])

  // find movies

  // running the API call once on mount
  useEffect( () => {
    const apiKey = ''
  
    axios({
      url: 'https://api.themoviedb.org/3/trending/all/week',
      method: 'GET',
      dataResponse: 'json',
      params: {
        api_key: apiKey,
        format: 'json',
      }
    }).then((res) => {
      setMovieArr(res.data.results);
    })

  },[])

  // console.log(movieArr);

  return (

      <div className="App">
        <Navbar />
        <Banner />
        <div className="movie">
          {/* <h2>Trending</h2> */}
          {
            movieArr.map( movie => {
              return (
                <Movies className="movie" key={movie.id} movieObj={movie} />
              )
            })
          }
        </div>
      </div>

  );
}

export default App;
