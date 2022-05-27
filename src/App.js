import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'

const App = () => {

  const [theme, setTheme] = useState('light');


    const localStorageTheme = theme => {
      localStorage.setItem('theme', theme);
      setTheme(theme)
    }
   

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    localTheme ? setTheme(localTheme) : localStorageTheme('light')
  }, [])


  return (
    <div id={theme}>
      <div className='App'>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage theme={theme} localStorageTheme={localStorageTheme} />}/>
          </Routes>
        </Router>
      </div>
    </div>
  )
}

export default App