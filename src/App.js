import './App.css';
import './Pages.css';
import React from 'react'
import Menu from './components/Menu';
import Title from './components/Title';
import Main from './components/Main';
import Footer from './components/Footer';

function App(){
  return (
    <div className="App">
      <Title />
      <Menu />
      <Main />
      <Footer />
    </div>
  );
}

export default App;