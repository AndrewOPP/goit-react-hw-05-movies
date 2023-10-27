import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { MYAPI } from './Home';
import toast, { Toaster } from 'react-hot-toast';

export function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${MYAPI}`
        );
        setMovie(data.data);
      } catch {
        toast.error('Sorry, such movie has not found');
        console.log('No information found');
      }
    };
    getData();
  }, [id]);

  return (
    <div>
      {movie.title && (
        <div>
          <h1>Title: {movie.title}</h1>
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt="poster"
            width={400}
            height={600}
          />
          <p>User score: {movie.vote_average}</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h2>Genres</h2>
          <ul>
            {movie.genres.map(elem => (
              <li key={elem.id}>{elem.name}</li>
            ))}
          </ul>
          <h2>Additional information</h2>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          <Outlet />
        </div>
      )}
      <Toaster />
    </div>
  );
}
