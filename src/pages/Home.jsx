import axios from 'axios';
import { MoviesList } from 'components/MoviesList';
import { useEffect, useState } from 'react';

export const MYAPI = '48d7bf93e386bf362111f4874b62be4e';

export function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios.get(
          `https://api.themoviedb.org/3/trending/all/day?api_key=${MYAPI}`
        );
        setMovies(data.data.results);
      } catch {
        console.log('ERROR');
      }
    };
    getData();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <MoviesList movies={movies} />
    </div>
  );
}
