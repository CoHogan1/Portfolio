import React, { Component } from 'react'


export default class Navigation extends Component {
    constructor(props){
        super(props)
        this.state = {
            linkedin : 'http://www.linkedin.com/in/conner-hogan-40b39b37',
            gitHub: 'http://www.github.com/CoHogan1',
            resume: 'https://docs.google.com/document/d/1qXPDeWNiPBRNpcFi6r4XKwQZzN1VeNRxzJYcbU-jIxg/edit?usp=sharing',
            project1: 'http://cohogan1.github.io/Neon-Color-game/',
            project2: 'https://baindefogger.herokuapp.com/',
            project3: '',
        }
    }



    render(){
        return(
            <div className="nav">
                <p>ConnerRHogan@Gmail.com</p>
                <p>720-338-5637</p>
                <p>Golden CO</p>
                <p><a href={this.state.gitHub} target="_blank" rel="noreferrer">GitHub</a></p>

                <p><a href={this.state.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></p>

                <p><a href={this.state.resume} target="_blank" rel="noreferrer">Resume</a></p>
                <p><a href={this.state.project1} target="_blank" rel="noreferrer">Project 1</a></p>
                <p><a href={this.state.project2} target="_blank" rel="noreferrer">Project 2</a></p>
                <p></p>
            </div>
        )
    }
}
