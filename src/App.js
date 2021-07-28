import "./styles/scss/App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Hero";
import Movies from "./components/Movies";
import Footer from "./components/Footer";
import axios from "axios";
// import firebase from "./firebase";
import { useEffect, useState } from "react";

function App() {
  // initialize state
  const [movieArr, setMovieArr] = useState([]);

  // find movies

  // running the API call once on mount
  useEffect(() => {
    const apiKey = "";

    axios({
      url: "https://api.themoviedb.org/3/trending/all/week",
      method: "GET",
      dataResponse: "json",
      params: {
        api_key: apiKey,
        format: "json",
      },
    }).then((res) => {
      setMovieArr(res.data.results);
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Movies movies={movieArr} />
      <Footer />
    </div>
  );
}

export default App;
