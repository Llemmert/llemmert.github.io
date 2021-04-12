import React from 'react'

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Quiz Ninjas",
      subtitle: "Pub Trivia"
    };
  }
    render () {
      return( 
      <h1 className ="App-header">
        {this.state.title} <br/> {this.state.subtitle}
      </h1>
      )
    }
  }

  export default Title;