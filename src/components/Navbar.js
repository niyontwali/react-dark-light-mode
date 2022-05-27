import React from 'react'
import { NavLink } from 'react-router-dom'
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const Navbar = ({theme, toggleTheme}) => {
  
  return (
    <div id={theme}>
      <div className='navbarContainer'>
        <ul className='orderedList'>
          <div className='right-links'>
            <NavLink className='navlinks' to="/">Blog Page</NavLink>
          </div>
          <div>
            {
              theme === 'light' 
                ? <BsFillSunFill className='react-icon' onClick={toggleTheme} />
                : <BsFillMoonFill className='react-icon' onClick={toggleTheme} />
            }
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Navbar