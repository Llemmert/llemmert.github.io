import React from 'react';
import MusicPic from '../Images/MusicPic.jpg'
import StarWars from '../Images/StarWars.jpg'

class Samples extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            page_title: "Sample Questions and Answers:"
        }
    }
    render() {
        return(
            <div class="pages">
                <h1 class="heading">
                    <b>{this.state.page_title}</b> <br/><br/>
                </h1>
                <img class="image-right" src={MusicPic} alt="MusicPic" ALIGN= "right"/>
                <div id="left-block">
               
                    <div id="left-text">
                        <h2 class="heading">
                           Here at Quiz Ninjas, we ask the important questions, from questions about song lyrics:
                        </h2>
                        <p1 class="body">
                        What did Miley Cyrus come in like? <br/>
                        <b>Answer: A Wrecking Ball</b>
                        <br/>What band do the Wombats want to dance to, saying, “Let the love tear us apart?”<br/>
                        <b>Answer: Joy Division</b>
                        <br/>Name either of the vehicles that Morrissey would be ok with smashing into us, killing the both of us. From the song: There is a light and it never goes out.<br/>
                        <b>Answer: A double decker bus or a 10 ton truck</b>
                        <br/>Name any of the four things that are just a shot away in the Rolling Stones’s Gimme Shelter?<br/>
                        <b>Answer: War, Children, Rape, Murder</b>
                        <br/>If I’m thinking to myself, this could be heaven or hell, where am I?<br/>
                        <b>Answer: The Hotel California</b>
                        <br/>When the Beatles talk about getting older and losing their hair, what age are they going to be?<br/>
                        <b>Answer: 64</b>
                        <br/>Who taught us all that the word perdedor is Spanish for “loser”?<br/>
                        <b>Answer: Beck</b>
                        <br/>In which rock song did they burn down the gambling house, it dying with an awful sound?<br/>
                        <b>Answer: Smoke on the Water</b>
                        </p1>
                    </div>
                </div>
                <img class="image-left" src={StarWars} alt="MusicPic" ALIGN= "left"/>
                <div id="right-block">
                    <div id="right-text">
                        <h1 class="heading">
                            To all things Star Wars:
                        </h1>
                        <p1 class="body">
                        What is the name of Chewbacca and the Wookies’ home planet? Hint: It has the same letter 3 times in a row in it.<br/>
                        <b>Answer: Kashyyyk</b>
                        <br/>How many members are in the Jedi Council?<br/>
                        <b>Answer: 12</b>
                        <br/>In the Star Wars universe, what are the microscopic lifeforms that are inside all living things, allowing one to use the Force?<br/>
                        <b>Answer: Midi-chlorians</b>
                        <br/>Admiral Ackbar, who had the famous “It’s a Trap!” line in Return of the Jedi, is what species?<br/>
                        <b>Answer: Mon-Calamari</b>
                        <br/>In the films, the evil General Grievous wields four lightsabers. For one point, what two colors are his four lightsabers?<br/>
                        <b>Answer: Green and Blue</b>
                        <br/>In the Solo: A Star Wars story film, Donald Glover AKA Troy AKA Childish Gambino, plays a young version of what original series character?<br/>
                        <b>Answer: Lando Calrissian</b>
                        <br/>Obi Wan splits up Luke and Leia at the end of episode 3. Who does Leia go to live with on Alderaan?<br/>
                        <b>Answer: Bail Organa</b>
                        <br/>What race had many of its members die in order to bring the plans of the second death star to the rebels in Return of the Jedi?<br/>
                        <b>Answer: Bothans</b>
                        </p1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Samples;