import React from 'react'
import "./Pageonecss.css"
import { NavLink, Route, Routes } from 'react-router-dom'


function NavBar() {
  return (
    <>
    <div className='navbar'>
    <h1 className='heading'><span className='head-h'>M</span>OVIES <span className='head-h'>H</span>OUSE</h1>
    <div className='btndiv'>
      
    <NavLink  to="/" className="links" ><button className="navbtn">Home</button>
    </NavLink>
    <NavLink  to="/movies" className="links" ><button className="navbtn">Movies</button></NavLink>
    <NavLink  to="/shows" className="links" ><button className="navbtn">shows</button>
    </NavLink>
    <NavLink  to="/search" className="links" ><button className="navbtn">search</button></NavLink> 
 
    </div>
  </div>
  </>
  )
}

export default NavBar