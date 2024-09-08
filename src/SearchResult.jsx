import React, { useState, useEffect } from "react";
import './Pageonecss.css';

export const SearchResult = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); 

 
  const searchnow = async (e) => {
    e.preventDefault(); 
    if (searchQuery.trim() === "") return; 

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=c3a827d84c713b6be30fc6a9c85b8b5c&query=${encodeURIComponent(searchQuery)}`
      );
      const data = await response.json();
      setMovies(data.results);
     
    } catch (error) {
      console.error('Error fetching movie data:', error);
    }
  };

  return (
    <> 
    <div className="searchdiv">
        <form onSubmit={searchnow}action="/search" className="searchform">
        <input 
          type="search" 
          value={searchQuery} 
          className='searchbar'
          onChange={(e) => setSearchQuery(e.target.value)} 
          placeholder="Search for movies , shows ..." 
        />
        <button type="submit"className="searchbtn">Search</button>
      </form></div>
      <br />

      <div className='cardsdiv2'>
        <h1 className='p-heading'>Search Results:</h1>
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
