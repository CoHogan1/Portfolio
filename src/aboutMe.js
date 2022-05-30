import './App.css';
import React, { Component } from 'react'
import picture from './images/me.png'

export default class About extends Component {
    constructor(props){
        super(props)
        this.state = {
            me: picture,
        }
    }

    render(){
        return(
            <div className="about">

            <span>
            <img className="about-img" src={this.state.me} alt="selfie" loading="lazy"/>

            <p className="pitch"> "I am a detail oriented person. I bring a flexable working attitude.
                working in various fields, I can easily fit into almost any team.
                With almost two decades of work experience jumping into a new project
                is not an issue." <br/>
                ~ Me
            </p>
            </span>

            <h2 className="bg" >Personality Traits</h2>
            <span className="bg" >
                <ul className="traits">
                    <li>Creative approach to problem solving</li>
                    <li>Dependable</li>
                    <li>Loves Tacos</li>
                    <li>Time management</li>
                    <li>Eager to learn new skills</li>
                    <li>Lots of experience</li>
                    <li>Flexable</li>
                    <li>Leader</li>
                    <li>Consistent</li>
                    <li>Result driven</li>
                    <li>Team player</li>
                </ul>

                <ul className="traits two">
                    <li>Rapid problem solving</li>
                    <li>Socialibility</li>
                    <li>Assertiveness</li>
                    <li>Responsiveness</li>
                    <li>Responsiveness</li>
                    <li>Structure</li>
                    <li>Adapability</li>
                    <li>Optimism</li>
                    <li>Spatial visualization</li>

                </ul>

            </span>
            <div className="gap"></div>


            <h2 className="bg">Interests</h2>
            <span className='bg'>
                <ul className="interests">
                    <li>Bands</li>
                    <li>....</li>
                    <li>NIN</li>
                    <li>Metallica</li>
                    <li>tool</li>
                    <li>more</li>
                </ul>

                <ul className="interests dos">
                    <li>Movies</li>
                    <li>....</li>
                    <li>Movies</li>
                    <li>Movies</li>
                    <li>Movies</li>
                    <li>Movies</li>
                </ul>
                <ul className="interests three">
                    <li>Other</li>
                    <li>....</li>
                    <li>My son</li>
                    <li>my daughter</li>
                    <li>3d pen</li>
                    <li>building</li>
                </ul>

            </span>
            </div>
        )
    }
}
