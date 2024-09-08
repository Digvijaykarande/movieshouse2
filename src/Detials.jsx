import React, { useEffect, useState } from 'react';
import "./Detailscss.css";
import { useParams } from 'react-router-dom';

function Detials() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const showMovie = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${encodeURIComponent(movieId)}?api_key=c3a827d84c713b6be30fc6a9c85b8b5c`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.log("Error fetching movie data:", error);
      } finally {
        setLoading(false);
      }
    };
    showMovie();
  }, [movieId]);

  if (loading) {
    return <div>Loading...</div>; // Show a loading state while data is being fetched
  }

  if (!movie) {
    return <div>No movie data available.</div>; // Handle case where movie data is not available
  }

  return (
    <div className='details-container'>
    <div className='poster-section'>
      <img 
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
        className='poster-img' 
        alt={`${movie.title} Poster`} 
      />
    </div>
    <div className='info-section'>
      <h1 className='movie-title'>{movie.title}</h1>

      <div className='movie-details'>
        <h3 className='release-date'>Release Date: {movie.release_date}</h3>
        <h3 className='genre'>Language: {movie.original_language}</h3>
        <h3 className='duration'>Duration: {movie.runtime} min</h3>
      </div>

      <div className='rating-trailer'>
        <h3 className='user-score'>User Score: {Math.round(movie.vote_average * 2) / 2}</h3>
        <button className='trailer-btn'>Play Trailer ▶</button>
      </div>

      <div className='budget-info'>
        <h3>Budget: ${movie.budget.toLocaleString()}</h3>
        <h3>Box Office: ${movie.revenue.toLocaleString()}</h3>
      </div>

      <div className='overview-section'>
        <h2>Overview</h2>
        <p className='overview-text'>{movie.overview}</p>
      </div>
    </div>
  </div>
  );
}

export default Detials;
