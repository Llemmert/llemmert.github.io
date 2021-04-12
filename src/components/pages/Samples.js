import React from 'react';

class Samples extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            page_title: "Sample Questions"
        }
    }
    render() {
        return(
            <div class="pages">
                <h1 class="heading">
                    {this.state.page_title}
                </h1>
            </div>
        );
    }
}

export default Samples;