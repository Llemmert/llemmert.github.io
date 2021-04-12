import React from "react"
import Map from '../Images/CruisersMap.JPG'
import Cruisers from '../Images/Cruisers.jpg'

class Homepage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            page_title: "Home"
        }
    };
    render(){
        return(
            <div class="pages">
                <div id="center-block">
                <h1 class="heading" ALIGN="left">
                    {this.state.page_title} <br/><br/>
                </h1>
                <a href="https://www.google.com/maps/place/Cruisers+Bar/@39.1080712,-108.5448772,17.5z/data=!4m8!1m2!2m1!1sCruisers+Bar!3m4!1s0x87471dc0e4a1736b:0x3163aa93a0512e53!8m2!3d39.108551!4d-108.5438537" target="_blank" rel="noreferrer">
                    <img class="image-page" src={Map} alt="CruisersMap" ALIGN="right"/>
                </a>
                   <div id="left-text">
                        <h1 class="heading">
                            Who we are:
                        </h1>
                        <p1 class="body">
                            *We are Grand Junction, Colorado's premiere pub trivia night <br/>*Active and on-going for over 12 years <br/>
                            *Each quiz is hand-crafted with love by one of our local quiz-masters <br/>
                            *Hosted at <a href="http://cruisersgj.com/" target="_blank" rel="noreferrer">Cruisers Bar</a> on 
                            Tuesday evenings from 8:00 until 10:00 <br/> *Reach us at our <a href="https://www.facebook.com/Quiz-Ninjas-115702078557363" target="_blank" rel="noreferrer">
                            Quiz Ninjas Facebook Page</a> <br/> *Click the map for directions to the quiz
                        </p1>
                    </div>
                    <img class="image-left" src={Cruisers} alt="Cruisers" ALIGN="center"/>
                </div>
                <br/><br/><br/>
            </div>
        );
    }
}

export default Homepage;