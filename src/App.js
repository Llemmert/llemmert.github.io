import './App.css';
import React from 'react'

class Title extends React.Component {
  render () {
    return( 
    <h1 className ="App-header">
      Quiz Ninjas <br/> Pub Trivia
    </h1>
    )
  }
}
class Menu extends React.Component {
  render () {
    return (
      <h1 className = "App-menu">
        <a
          className= "App-link"
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer">
          About Us
        </a>
      </h1>
    );
  }
}
const title = <Title/>;
const menu = <Menu/>;

function App(){
  return [title, menu]
}

export default App;