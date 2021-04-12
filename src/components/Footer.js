import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Thanks for checking out Quiz Ninjas!"
        }
    }

    render() {
        return(
            <div class="App-footer">
                <h2 class="App-foot-font">
                    <br/>{this.state.message}
                </h2>
            </div>
        );
    }
}

export default Footer;