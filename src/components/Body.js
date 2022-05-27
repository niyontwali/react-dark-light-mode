import React from 'react'
import jsImage from '../assets/images/js.png'

const Body = ({theme}) => {
  return (
    <div id={theme}>
      <div className='bodySection'>
        <div className='image'>
          <img src={jsImage} alt="js" />
        </div>
        <h1 className='title'>Basics of JavaScript</h1>
        <div className='blogContent'>
          <div className='line'></div>
          <p>JavaScript is a powerful yet simple programming language, making it the language of choice for millions of beginning coders. If you’re thinking about diving into programming with JavaScript, what should you know? Here are 10 things all beginners should know about JavaScript.</p>
          <br />
          <p>
            <strong>1. JavaScript is not Java</strong> 
            <br/>
            Despite their similar names, JavaScript and Java have no relation to each other. Java was developed by Sun Microsystems, while Netscape hired programmer Brendan Eich to develop a version of the Scheme programming language to embed in its Navigator web browser. The resulting language was called JavaScript, which has caused confusion ever since.
          </p>
          <br />
          <p>
            <strong>2. JavaScript Powers Active Web Content </strong> 
            <br/>     
            Before JavaScript was developed, HTML web pages were completely static – they couldn’t be changed on the client side without reloading the entire page. JavaScript was designed to overcome this by allowing changes to the HTML page structure and CSS style information in real time, without reloading the page. JavaScript code running in the browser can communicate back to the web server using Ajax (Asynchronous JavaScript and XML) or websockets.
            <br />
            <br />
            Originally, this functionality allowed for simple interactive web apps; for example, a “like” button on a social media site that automatically updated the number of “likes” on a post in real time. But now, JavaScript is the key component in nearly all interactive web applications, including word processors and spreadsheets like Google Docs and Microsoft Office 365, full-featured mail clients like Gmail and Outlook, and even multiplayer in-browser games.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Body