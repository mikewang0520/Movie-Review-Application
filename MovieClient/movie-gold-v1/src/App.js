import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';

function App() {

  //Return a destructured array of movies and a function to set the movies, from the useState hook
  //App component will be rerendered when the state is updated
  const [movies, setMovies] = useState();

  //Define an async function to get the movies from the API
  const getMovies = async () => {
    try{
      const response = await api.get('/api/v1/movies');
      console.log(response.data);
      setMovies(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  //getMovies will be called when the app component is mounted
  useEffect(() => {
    getMovies();
  },[]);

  return (
    <div className="App">

    </div>
  );
}

export default App;
