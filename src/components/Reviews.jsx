import axios from 'axios';
import { MYAPI } from 'pages/Home';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export function Reviews() {
  const { id } = useParams();
  const [reviews, setReviews] = useState('');
  useEffect(() => {
    const getAuthors = async () => {
      try {
        const reviews = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${MYAPI}`
        );
        console.log(reviews.data);
        setReviews(reviews.data);
      } catch {
        console.log('No information found');
      }
    };
    getAuthors();
  }, [id]);

  if (reviews.results && reviews.results.length !== 0) {
    return (
      <div>
        <h2>Reviews</h2>
        <ul>
          {reviews.results.map(elem => {
            return (
              <li>
                <p>{elem.author}</p>
                <p>{elem.content}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  return (
    <div>
      <h2>Reviews</h2>
      <p>Sorry, we dont have reviews for this movie</p>
    </div>
  );
}
