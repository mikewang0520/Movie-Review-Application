import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';

function App() {

  //Return a destructured array of movies and a function to set the movies, from the useState hook
  //App component will be rerendered when the state is updated
  const [movies, setMovies] = useState();

  //Define an async function to get the movies from the API
  const getMovies = async () => {
    try{
      const response = await api.get('/api/v1/movies');
      //console.log(response.data);
      setMovies(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  //getMovies will be called when the app component is mounted
  useEffect(() => {
    getMovies();
  },[]);

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home movies={movies}/>}></Route>
          <Route path="/Trailer/:ytTrailerId" element={<Trailer/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
