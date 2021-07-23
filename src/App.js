import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {
  // running the API call once on mount
  useEffect( () => {
    const apiKey = '4799fee60bb1f4fcd88ccbf374cf3598'
  
    axios({
      url: 'https://api.themoviedb.org/3',
      method: 'GET',
      dataResponse: 'json',
      params: {
        api_key: apiKey,
        format: 'json'
      }
    }).then((response) => {
      console.log(response);
    })
  
  })
  return (
    <div className="App">
      <h1>Oh Hi</h1>


    </div>
  );
}

export default App;
