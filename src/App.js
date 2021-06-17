import './App.css';
import React, { Component } from 'react'
import Navigation from './nav'
//1st project backround
import About from './me.js'
import color from './color.png'
import brain from './brain_defogger.png'
import vaca from './vacation.png'
import checkers from './checkers.png'
// 2nd project background
import col2 from './color_2.png'
import darkB from './dark-brain.png'
import vac2 from './vaca-2.png'
import darkC from './dark-checkers.png'
// tools
import css from './css-logo.png'
import html from './html5.png'
import js from './js-logo.png'
import python from './python-logo.png'
import jquery from './jquery-logo.png'
import react from './react-logo.png'
import node from './node-logo.png'
import flask from './flask-logo.png'
import mongoDB from './mongo-logo.png'
import sql from './post-sql-logo.png'
import api from './api.png'
import exp from './exp.png'
import socket from './socket.png'

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            me: true,
            p1: color,
            p2: brain,
            p3: vaca,
            p4: checkers,
            p12: col2,
            p22: darkB,
            p32:vac2,
            p42:darkC,
            js: js,
            py: python,
            jq: jquery,
            re: react,
            no: node,
            fl: flask,
            mD: mongoDB,
            sq: sql,
            css: css,
            html: html,
            api:api,
            soc: socket,
            ex: exp
        }
    }




    render(){
        return (
            <div className="App">
            <div className="cool">
            <div className="spacer"></div>
            <About/>
            <Navigation />

                <div className="project">
                    <div className="proPic"><img src={this.state.p1}></img><img src={this.state.p12}></img></div>
                    <div className="text">
                    <h1>Guess The Color</h1>
                    <p>This project is a two player game where you have two seconds
                    to select the appropiate color from the 6 choice boxes. Every
                    turn the color name stays the same. However the background, the
                    border, the font color also change.</p>
                    <div>
                        <img className="skills" src={this.state.html}></img>
                        <img className="skills" src={this.state.css}></img>
                        <img className="skills" src={this.state.js}></img>
                    </div>
                    </div>

                </div>
                <div className="project">
                    <div className="proPic"><img src={this.state.p2}></img><img src={this.state.p22}></img></div>
                    <div className="text">
                    <h1>Brain Defogger</h1>
                    <p>We all feel the afects of brain fog, and this app allows you to keep track of various methods that
                    allow you to clear your mind after a full day of school, or
                    meetings.</p>
                    <div>
                        <img className="skills" src={this.state.html}></img>
                        <img className="skills" src={this.state.css}></img>
                        <img className="skills" src={this.state.js}></img>
                        <img className="skills" src={this.state.no}></img>
                        <img className="skills" src={this.state.mD}></img>
                    </div>
                    </div>
                </div>
                <div className="project">
                    <div className="proPic"><img src={this.state.p3}></img><img src={this.state.p32}></img></div>
                    <div className="text">
                    <h1>Travel Assistant</h1>
                    <p>This was a group project. I was assigned the leader of this project.
                    This presented a new set of problems for me. We, the team, got together
                    and alligned our focus on this travel app.This app takes a vacation from
                    the user input and returns restruants, and weather uppon the desired
                    vacation dates. The app is full crud, and used multiple Apis. I was
                    responcible for the main code layout. I designed it in a way that each
                    teamate could work on their own file without having to touch anyone elses.
                    The main idea of this was to eliminate git issues.</p>
                    <div>
                        <img className="skills" src={this.state.re}></img>
                        <img className="skills" src={this.state.css}></img>
                        <img className="skills" src={this.state.js}></img>
                        <img className="skills" src={this.state.no}></img>
                        <img className="skills" src={this.state.mD}></img>
                        <img className="skills" src={this.state.api}></img>
                    </div>
                    </div>
                </div>
                <div className="project">
                    <div className="proPic"><img src={this.state.p4}></img><img src={this.state.p42}></img></div>
                    <div className="text">
                    <h1>Multiplayer Checkers</h1>
                    <p>This app will allow you to play a game of checkers with a friend.
                    this app will also allow you to chat with your opponent at the same
                    time. Using socket-io for the first time presented a big challange. In
                    addition to the new technology, I wanted more practice with Flask, and
                    Python3. This combination only led to road blocks. I do not recommend
                    this mix of languages. However I gained the knowledge I was looking for
                    and I am already planning out my next big project.
                    </p>
                    <div>
                        <img className="skills" src={this.state.css}></img>
                        <img className="skills" src={this.state.js}></img>
                        <img className="skills" src={this.state.py}></img>
                        <img className="skills" src={this.state.fl}></img>
                        <img className="skills" src={this.state.sq}></img>
                        <img className="skills" src={this.state.re}></img>
                        <img className="skills" src={this.state.soc}></img>



                    </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default App;
