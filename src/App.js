import './styles/scss/App.css'
import DisplayMovie from './components/DisplayMovie';
import Banner from './components/Hero';
import Navbar from './components/Navbar';
import axios from 'axios'
import { useEffect, useState } from 'react'



function App() {
  // initialize state
  const [ movieArr, setMovieArr ] = useState([])

  // find movies

  // running the API call once on mount
  useEffect( () => {
    const apiKey = '4799fee60bb1f4fcd88ccbf374cf3598'
  
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
      </div>
      // {/* <h1>Trending</h1> */}

      // {/* <div>
      //   {
      //     movieArr.map( movie => {
      //       return (
      //         <DisplayMovie key={movie.id} movieObj={movie} />
      //         )
      //       })
      //     }
      // </div> */}

  );
}

export default App;
