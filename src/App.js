import React from 'react';
import ReactDOM from 'react-dom';

class Hi extends React.Component {
  render () {
    return <h1>Hello, {this.props.name}</h1>
  }
}
const element = <Hi name="Logan"/>;
function App() {
  return (
    ReactDOM.render(
      element,
      document.getElementById('root')
    )
  );
}

export default App;
