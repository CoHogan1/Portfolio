import './App.css';
import React, { Component } from 'react'
// skills
import GA    from './images/GA.png'
import pyc   from './images/python3c.png'
import jsc   from './images/jsc.png'
import jqc   from './images/jqc.png'
import cssc  from './images/cssc.png'
import htmlc from './images/htmlc.png'

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
            ga: GA,
            py: pyc,
            js: jsc,
            jq: jqc,
            css:cssc,
            html:htmlc,
        }
    }
    copy = () =>{
        const content = `720-338-5637`
        navigator.clipboard.writeText(content)
    }

    render(){
        return(
            <div className="nav">
                <div className="options"></div>
                    <p>About me</p>
                    <p>Skills</p>
                    <p>projects</p>
                    <p>contact me</p>
            </div>
        )
    }
}


// <p><a href="mailto: ConnerRHogan@gmail.com">Email</a></p>
// <p><a href={this.state.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></p>
// <p><a href={this.state.gitHub} target="_blank" rel="noreferrer">Github</a></p>



// <ol>
// <li><a href="mailto: ConnerRHogan@gmail.com">Email</a></li>
// <li onClick={this.copy}>Phone</li>
// <li><a href={this.state.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
// </ol>


// <ol>
// <li><a href={this.state.gitHub} target="_blank" rel="noreferrer">Github</a></li>
// <li><a href={this.state.updatedp1} target="_blank" rel="noreferrer">Project 1</a></li>
// <li><a href={this.state.updatedp2} target="_blank" rel="noreferrer">Project 2</a></li>
// <li><a href={this.state.project3B} target="_blank" rel="noreferrer">Project 3 Back End</a></li>
// <li><a href={this.state.project3F} target="_blank" rel="noreferrer">Project 3 Front End</a></li>
// <li><a href={this.state.project4B} target="_blank" rel="noreferrer">Project 4 Back End</a></li>
// <li><a href={this.state.project4F} target="_blank" rel="noreferrer">Project 4 Front End</a></li>
// </ol>


// <ol>
//     <li>GA graduate</li>
// </ol>
