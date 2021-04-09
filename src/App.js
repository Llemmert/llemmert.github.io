import './App.css';
import React from 'react'
import Menu from './components/Menu';
import Title from './components/Title';
import Main from './components/Main';

function App(){
  return (
    <div className="App">
      <Title />
      <Menu />
      <Main />
    </div>
  );
}

export default App;