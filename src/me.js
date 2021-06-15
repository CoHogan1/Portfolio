import './App.css';
import React, { Component } from 'react'
import picture from './me.png'

export default class About extends Component {
    constructor(props){
        super(props)
        this.state = {
            me: picture
        }
    }

    render(){
        return(
            <div className="about">
                <div className="picHead">
                    <img src={this.state.me} className="pic" alt=""/>
                </div>
                <div className="inner">
                    <h1>Software Developer</h1>
                    <p>Skills</p>
                    <p>Java-Script</p>
                    <p>Python3</p>
                    <p>React</p>
                    <p>jQuery</p>
                    <p>Flask</p>
                    <p>SQL</p>
                    <p>MongoDB</p>
                </div>

            </div>
        )
    }
}
