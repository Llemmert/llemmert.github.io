import React from 'react';
import ReactDOM from 'react-dom';

export class Ribbon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          name: "Logan Emmert",
          title: "Student of Computer Science",
          univer_url: 'http://www.coloradomesa.edu',
         // univer_logo: '/assets/cmu-logo.png'
        }
}

render(){
    const imgStyle = {
        position: "absolute",
        top: "5px",
        left: "10px",
        height: "75px"
    };

return (
    <div>
        <a
        className="App=link"
        href="https://google.com"
        target="_blank"
        rel="noopener noreferrer"
         >
        Hello
        </a>
    </div>
);
}
}
ReactDOM.render(
    <Ribbon />,
    document.getElementById("ribbon")
);