import React from 'react'
import Logo from '../Images/NinjaLogo.jpg'
import Logan from '../Images/LoganGolf.jpg'
import Hosting from '../Images/LoganHosting.jpg'

class About extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            page_title: "About Us"
        }
    }
    render(){
        return(
            <div class="pages">
                <h1 class="heading">
                    {this.state.page_title} <br/><br/>
                </h1>
                <div id="left-block">
                    <img class="image-page" src={Logo} alt="NinjaLogo" ALIGN="right"/>
                    <div id="left-text">
                        <h1 class="heading">
                            Welcome to the Quiz!
                        </h1>
                        <p1 class="body">
                            Ever wonder what it's like being the smartest person in the room? Well, 
                            now you can experience that exact feeling!* Quiz Ninjas is a weekly
                            trivia night hosted by a couple local knowledge-seeking weirdos.
                            Look for us on Tuesday nights at Cruisers Bar on Horizon Drive!
                        </p1>
                        <p2 class="body">
                            <br/><br/>*Results may vary, and you may end up experiencing the exact opposite of this feeling, depending on the night*
                        </p2>
                    </div>
                </div>
                <div id="right-block">
                <img class="image-page" src={Logan} alt="LoganGolf" ALIGN="Left"/>
                    <div id="right-text">
                        <h1 class="heading">
                            The Quiz Masters:
                        </h1>
                        <p1 class="body">
                            Logan is an alt-rock loving computer science student who lives in a world
                            of movie quotes and song titles. If he's not telling someone what
                            song is playing on the radio or on the golf course, he can be found binging TV shows or
                            grinding through some levels in Runescape. <br/><br/>
                            Howie is a man of many talents who balances out the quiz with knowledge
                            of the outdoors and great taste in all sounds acoustic. 
                            Howie could not be reached for a photo, as he was probably building a cabin somewhere.
                        </p1>
                    </div>
                </div>
                <div id="left-block">
                <img class="image-page" src={Hosting} alt="LoganHosting" ALIGN="right"/>
                    <div id="left-text">
                        <h1 class="heading">
                            Them's the rules!
                        </h1>
                        <p1 class="body">
                            Quiz Ninjas is team-styled trivia that consists of 8 rounds of 8 questions. No limits on team size here, folks.
                            Bring some good (or smart) company and test your wits against Grand Junction's 
                            brightest. We compete for Cruisers Dollars and entry is free!
                            <br/><br/> We'll see you there!
                        </p1>
                   </div>
                </div>
            </div>
        );
    }
}

export default About;