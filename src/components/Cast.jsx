import axios from 'axios';
import { MYAPI } from 'Home';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Cast() {
  const { id } = useParams();
  const [authors, setAuthors] = useState('');
  useEffect(() => {
    const getAuthors = async () => {
      try {
        const authors = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${MYAPI}`
        );
        setAuthors(authors.data);
      } catch {
        console.log('No information found');
      }
    };
    getAuthors();
  }, [id]);
  if (authors) {
    return (
      <div>
        <ul>
          {authors.cast.map(person => {
            return (
              <li key={person.id}>
                <p>Name: {person.name}</p>
                <img
                  src={`https://image.tmdb.org/t/p/original${person.profile_path}`}
                  alt="cast person"
                  width={300}
                  height={400}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
