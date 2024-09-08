import React,{useEffect,useState} from "react";
import './Pageonecss.css';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const popularMovies = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/movie/popular?api_key=c3a827d84c713b6be30fc6a9c85b8b5c'
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    popularMovies();
  }, []);

  return (
    <>    
    <div className='cardsdiv2'>
    <h1 className='p-heading'>popular Movies</h1>
    <div className='thediv2'>
        {movies.map((movie) => {
          const imdb = Math.ceil(movie.vote_average * 10) / 10;
          return (
            <div className='card' key={movie.id}>
              <img
                className='card-img'
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt='Movie Poster'
                loading="lazy"
              />
              <h3 className='moviename'>{movie.original_title}</h3>
              <h4 className='detailsdiv'> 
                <span>{movie.release_date}</span>
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
