import './App.css';
import DisplayMovie from './DisplayMovie';
import './DisplayMovie.css'
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
      <h1>Trending</h1>

      <div>
        {
          movieArr.map( movie => {
            return (
              <DisplayMovie key={movie.id} movieObj={movie} />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
