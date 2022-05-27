import React from 'react'
import Body from '../components/Body';
import Navbar from '../components/Navbar'

const LandingPage = ({theme,localStorageTheme}) => {
  
  const toggleTheme = () => {
    theme === 'light' ? localStorageTheme('dark') : localStorageTheme('light');
  }

  return (
    <div id={theme}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Body theme={theme} />
    </div>
  )
}

export default LandingPage