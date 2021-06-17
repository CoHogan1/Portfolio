import './App.css';
import React, { Component } from 'react'
import Navigation from './nav'
import About from './me.js'
import color from './color_2.png'
import brain from './brain_defogger.png'
import vaca from './vacation.png'
import checkers from './checkers.png'

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            me: true,
            p1: color,
            p2: brain,
            p3: vaca,
            p4: checkers,

        }
    }




    render(){
        return (
            <div className="App">
            <div className="spacer"></div>
            <About/>
            <Navigation />

                <div className="project">
                    <div className="proPic"><img src={this.state.p1}></img></div>
                    <h1>Guess The Color</h1>
                    <p>This project is a two player game where you have two seconds
                    to select the appropiate color from the 6 choice boxes. Every
                    turn the color name stays the same. However the background, the
                    border, the font color also change.</p>
                    <div>Tools: HTML5 CSS Javascript</div>

                </div>
                <div className="project">
                    <div className="proPic"><img src={this.state.p2}></img></div>
                    <h1>Brain Defogger</h1>
                    <p>We all feel the afects of brain fog, and this app allows you to keep track of various methods that
                    allow you to clear your mind after a full day of school, or
                    meetings.</p>
                    <div>Tools: Node, MongoDB, HTML5, Javascript</div>

                </div>
                <div className="project">
                    <div className="proPic"><img src={this.state.p3}></img></div>
                    <h1>Travel Assistant</h1>
                    <p>This was a group project. I was assigned the leader of this project.
                    This presented a new set of problems for me. We, the team, got together
                    and alligned our focus on this travel app.This app takes a vacation from
                    the user input and returns restruants, and weather uppon the desired
                    vacation dates. The app is full crud, and used multiple Apis. I was
                    responcible for the main code layout. I designed it in a way that each
                    teamate could work on their own file without having to touch anyone elses.
                    The main idea of this was to eliminate git issues.</p>
                    <div>Tools: Node, MongoDB, React, Javascript, Multiple Apis</div>

                </div>
                <div className="project">
                    <div className="proPic"><img src={this.state.p4}></img></div>
                    <h1>Multiplayer Checkers</h1>
                    <p>This app will allow you to play a game of checkers with a friend.
                    this app will also allow you to chat with your opponent at the same
                    time. Using socket-io for the first time presented a big challange. In
                    addition to the new technology, I wanted more practice with Flask, and
                    Python3. This combination only led to road blocks. I do not recommend
                    this mix of languages. However I gained the knowledge I was looking for
                    and I am already planning out my next big project.
                    </p>
                    <div>Tools: Flask, Python3, mysql, Javascript, React, Socket-io</div>

                </div>

            </div>
        )
    }
}

export default App;
