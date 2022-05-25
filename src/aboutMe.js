import './App.css';
import React, { Component } from 'react'

import picture from './images/me.png'
import js      from './images/js-logo.png'
import python  from './images/python-logo.png'
import jquery  from './images/jquery-logo.png'
import react   from './images/react-logo.png'
import node    from './images/node-logo.png'
import flask   from './images/flask-logo.png'
import mongoDB from './images/mongo-logo.png'
import sql     from './images/post-sql-logo.png'
import css     from './images/css-logo.png'
import html    from './images/html5.png'
import exp     from './images/exp.png'
import socket  from './images/socket.png'
import taco    from './images/taco.png'
import pie     from './images/pie.png'

export default class About extends Component {
    constructor(props){
        super(props)
        this.state = {
            me: picture,
            skills:[ js, python, jquery, react, node, flask, mongoDB, sql, css,
                 html, socket, exp, taco, pie ],
        }
    }

    render(){
        return(
            <div className="about">

            <span>
            <img className="about-img" src={this.state.me} alt="selfie" loading="lazy"/>

            <p className="pitch">"I am a detail oriented person. I bring a flexable working attitude.
                working in various fields, I can easily fit into almost any team.
                With almost two decades of work experience jumping into a new project
                is not an issue." <br/>
                ~ Me
            </p>
            </span>

            <h2>personality Traits</h2>
            <span>
                <ul className="traits">
                    <li>creative approach to problem solving</li>
                    <li>dependable</li>
                    <li>Loves Tacos</li>
                    <li>time management</li>
                    <li>eager to learn new skills</li>
                    <li>lots of experience</li>
                    <li>flexable</li>
                    <li>leader</li>
                    <li>consistent</li>
                    <li>Result driven</li>
                    <li>Team player</li>
                </ul>

                <ul>
                    <li>other traits on re review</li>
                    <li>other traits on re review</li>
                    <li>other traits on re review</li>
                    <li>other traits on re review</li>
                    <li>other traits on re review</li>

                </ul>

            </span>


            <h3>Interests </h3>
            <span>
                <ul className="interests">
                    <li>Bands</li>
                    <li>....</li>
                    <li>NIN</li>
                    <li>Metallica</li>
                    <li>tool</li>
                    <li>more</li>
                </ul>

                <ul>
                    <li>Movies</li>
                    <li>....</li>
                    <li>Movies</li>
                    <li>Movies</li>
                    <li>Movies</li>
                    <li>Movies</li>
                </ul>
                <ul>
                    <li>Other</li>
                    <li>....</li>
                    <li>My son</li>
                    <li>my daughter</li>
                    <li>3d pen</li>
                    <li>building</li>
                </ul>

            </span>




                {/* <div className="skills-container" >
                    {this.state.skills.map((x,i) => {
                        return <img className="skills" src={x} alt="" key={i}></img>
                    })}
                </div> */}



            </div>
        )
    }
}
