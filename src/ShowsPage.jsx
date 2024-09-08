import React,{useEffect,useState} from "react";
import './Pageonecss.css';
import { useNavigate } from 'react-router-dom';

export default function ShowsPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const popularMovies = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/tv/popular?api_key=c3a827d84c713b6be30fc6a9c85b8b5c'
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    popularMovies();
  }, []);
  const navigate = useNavigate();

  const handleClick = (movieId) => {
    navigate(`/detail/${movieId}`);
  };
  return (
    <>    
    <div className='cardsdiv2'>
    <h1 className='p-heading'>popular Shows</h1>
    <div className='thediv2'>
        {movies.map((movie) => {
          const imdb = Math.ceil(movie.vote_average * 10) / 10;
          return (
            <div 
                className='card' 
                key={movie.id} 
                onClick={() => handleClick(movie.id)}
              >
              <img
                className='card-img'
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt='Movie Poster'
                loading="lazy"
              />
              <h3 className='moviename'>{movie.original_name}</h3>
              <h4 className='detailsdiv'> 
                <span>{movie.first_air_date}</span>
                <span className='imdb-score'> {imdb}</span>
              </h4>
              
            </div>
          );
        })}
      </div>
      </div>
    </>
  );
};
