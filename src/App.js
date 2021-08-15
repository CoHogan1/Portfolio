import './App.css';
import React, { Component } from 'react'
import Navigation  from './nav'
//1st project backround
import About    from './me.js'
import color    from './color.png'
import brain    from './brain_defogger.png'
import vaca     from './vacation.png'
import checkers from './checkers.png'
// 2nd project backgroundls
import col2     from './color_2.png'
import darkB    from './dark-brain.png'
import vac2     from './vaca-2.png'
import darkC    from './dark-checkers.png'
// tools
import css      from './css-logo.png'
import html     from './html5.png'
import js       from './js-logo.png'
import python   from './python-logo.png'
import jquery   from './jquery-logo.png'
import react    from './react-logo.png'
import node     from './node-logo.png'
import flask    from './flask-logo.png'
import mongoDB  from './mongo-logo.png'
import sql      from './post-sql-logo.png'
import api      from './api.png'
import exp      from './exp.png'
import socket   from './socket.png'
import taco     from './taco.png'
// skills
import GA    from './GA.png'
import pyc   from './python3c.png'
import jsc   from './jsc.png'
import jqc   from './jqc.png'
import cssc  from './cssc.png'
import htmlc from './htmlc.png'

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            me: true,
            pyc: pyc,
            jsc:jsc,
            jqc:jqc,
            cssc:cssc,
            htmlc:htmlc,
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
            ex: exp,
            taco:taco,
            ga: GA,
        }
    }


    render(){
        return (
            <div className="App">
            <div className="cool">
            <div className="spacer"></div>

            <About/>
            <Navigation />

                <div className="right" >
                    <div className="rbar">
                    <img src={this.state.ga}     alt=""></img>
                    <img src={this.state.pyc}    alt=""></img>
                    <img src={this.state.jsc}    alt=""></img>
                    <img src={this.state.jqc}    alt=""></img>
                    <img src={this.state.cssc}   alt=""></img>
                    <img src={this.state.htmlc}  alt=""></img>
                    <p>More skills Pending.....</p>
                    </div>
                </div>

                <div className="project">
                    <div className="proPic"><img src={this.state.p1} alt=""></img><img src={this.state.p12} alt=""></img></div>
                    <div className="text">
                    <h1>Guess The Color</h1>
                    <p>This is a two player game where you have two seconds
                    to select the appropriate color from the 6 choice boxes. Every
                    turn the main color changes. However the background, the
                    border, the font color also change.</p>
                    <div>
                        <img className="skills" src={this.state.html} alt="" ></img>
                        <img className="skills" src={this.state.css}  alt="" ></img>
                        <img className="skills" src={this.state.js}   alt="" ></img>
                        <img className="skills" src={this.state.taco} alt="" ></img>
                    </div>
                    </div>

                </div>
                <div className="project">
                    <div className="proPic"><img src={this.state.p2} alt=""></img><img src={this.state.p22} alt=""></img></div>
                    <div className="text">
                    <h1>Brain Defogger</h1>
                    <p>This app will allow you to keep track of methods you use
                    to clear your own brain fog. This includes a rating system,
                    personal notes, and even a delete button in case you find
                    a better method.</p>
                    <div>
                        <img className="skills" src={this.state.html} alt="" ></img>
                        <img className="skills" src={this.state.css}  alt="" ></img>
                        <img className="skills" src={this.state.js}   alt="" ></img>
                        <img className="skills" src={this.state.no}   alt="" ></img>
                        <img className="skills" src={this.state.mD}   alt="" ></img>
                        <img className="skills" src={this.state.taco} alt="" ></img>
                    </div>
                    </div>
                </div>
                <div className="project">
                    <div className="proPic"><img src={this.state.p3} alt=""></img><img src={this.state.p32} alt=""></img></div>
                    <div className="text">
                    <h1>Travel Assistant</h1>
                    <p>This app will assist your vacation planning. Utilizing
                        various APIs you can get local hotels, restaurants,
                        available bookings,  hotel ratings, and even predicted
                        weather for your vacation</p>
                    <div>
                        <img className="skills" src={this.state.re}   alt="" ></img>
                        <img className="skills" src={this.state.css}  alt="" ></img>
                        <img className="skills" src={this.state.js}   alt="" ></img>
                        <img className="skills" src={this.state.no}   alt="" ></img>
                        <img className="skills" src={this.state.mD}   alt="" ></img>
                        <img className="skills" src={this.state.api}  alt="" ></img>
                        <img className="skills" src={this.state.taco} alt="" ></img>
                    </div>
                    </div>
                </div>
                <div className="project">
                    <div className="proPic"><img src={this.state.p4} alt="" ></img><img src={this.state.p42} alt=""></img></div>
                    <div className="text">
                    <h1>Multiplayer Checkers</h1>
                    <p>This app will allow you to play a game of checkers with
                        a friend. There is also a chat feature allowing you to
                        chat with your friend while playing. I added a second
                        color scheme, and a dark mode.
                    </p>
                    <div>
                        <img className="skills" src={this.state.css}  alt="" ></img>
                        <img className="skills" src={this.state.js}   alt="" ></img>
                        <img className="skills" src={this.state.py}   alt="" ></img>
                        <img className="skills" src={this.state.fl}   alt="" ></img>
                        <img className="skills" src={this.state.sq}   alt="" ></img>
                        <img className="skills" src={this.state.re}   alt="" ></img>
                        <img className="skills" src={this.state.soc}  alt="" ></img>
                        <img className="skills" src={this.state.taco} alt="" ></img>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default App;
