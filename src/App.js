import './App.css';
import React from 'react'
import reactDom from 'react-dom';

class Hello extends React.Component {
  render () {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
const element = <Hello name="Logan"/>;
function App(){
reactDom.render(
  element,
  document.getElementById('root')
);
}
export default App;