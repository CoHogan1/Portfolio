import './App.css';
import React, { Component } from 'react'
import self from './images/me.png'


export default class Navigation extends Component {
    constructor(props){
        super(props)
        this.state = {
            linkedin:  'http://www.linkedin.com/in/conner-hogan-40b39b37',
            gitHub:    'http://www.github.com/CoHogan1',
            project1:  'https://determined-hermann-f61924.netlify.app/',
            updateP1:  'https://determined-hermann-f61924.netlify.app/',
            project2:  'https://updatedprojecttwo.herokuapp.com/sessions/new',
            updatedP2: 'https://updatedprojecttwo.herokuapp.com/sessions/new',
            project3F: '',
            project3B: '',
            project4B: '',
            project4F: '',
            me: self,
        }
    }
    copy = () =>{
        const content = `720-338-5637`
        navigator.clipboard.writeText(content)
    }



    render(){
        return(
            <div className="nav">
                <p><img className="user" src={this.state.me} alt="selfie" ></img></p>
                <a href="mailto: ConnerRHogan@gmail.com">Email</a>
                <p onClick={this.copy}>Phone </p>

                <p><a href={this.state.gitHub} target="_blank" rel="noreferrer">GitHub</a></p>

                <p><a href={this.state.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></p>

                <p><a href={this.state.project1} target="_blank" rel="noreferrer">Project 1</a></p>
                <p><a href={this.state.project2} target="_blank" rel="noreferrer">Project 2</a></p>

                <p><a href={this.state.project3B} target="_blank" rel="noreferrer">Project 3 Back End</a></p>
                <p><a href={this.state.project3F} target="_blank" rel="noreferrer">Project 3 Front End</a></p>

                <p><a href={this.state.project4B} target="_blank" rel="noreferrer">Project 4 Back End</a></p>
                <p><a href={this.state.project4F} target="_blank" rel="noreferrer">Project 4 Front End</a></p>
            </div>
        )
    }
}
