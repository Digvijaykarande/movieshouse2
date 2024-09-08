import React from 'react'
import { Pageone } from './Pageone'
import { NavLink, Route, Router, Routes } from 'react-router-dom'
import MoviesPage from './MoviesPage'
import ShowsPage from './ShowsPage'
import NavBar from './NavBar'
import { SearchResult } from './SearchResult'
import Detials from './Detials'

export default function App() {
  return (
    
    <>
    
      <NavBar />
      <Routes>
      <Route path='/movies'element={<MoviesPage/>} />
      <Route path='/shows'element={<ShowsPage/>} />
      <Route path='/search'element={<SearchResult/>} />
      <Route path='/'element={<Pageone/>} />
      <Route path='/detail/:movieId'element={<Detials/>} />
      </Routes>
   
  
   </>
  )
}
