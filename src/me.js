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
            soc: socket,
            ex: exp,
            taco: taco,
            pie: pie,
        }
    }

    render(){
        return(
            <div className="about">

            <div className="about-picHead">
                <div className="left">
                <img src={this.state.me} alt="selfie"/>
                </div>
                <div className="right">
                <h4>~Skills~</h4>
                <p>JavaScript, Father, Python3, React, j-Query, Flask, SQL, MongoDB, Categorizing, and Cooking Tacos</p>
                </div>
            </div>

            <div>
                <h1>Fullstack Software Developer</h1>
                <h2>Javascript & Python3</h2>
                <div className="skills-container" >
                    <img className="skills" src={this.state.html} alt=""></img>
                    <img className="skills" src={this.state.css}  alt=""></img>
                    <img className="skills" src={this.state.js}   alt=""></img>
                    <img className="skills" src={this.state.py}   alt=""></img>
                    <img className="skills" src={this.state.no}   alt=""></img>
                    <img className="skills" src={this.state.re}   alt=""></img>
                    <img className="skills" src={this.state.fl}   alt=""></img>
                    <img className="skills" src={this.state.mD}   alt=""></img>
                    <img className="skills" src={this.state.pie}  alt=""></img>
                    <img className="skills" src={this.state.sq}   alt=""></img>
                    <img className="skills" src={this.state.jq}   alt=""></img>
                    <img className="skills" src={this.state.ex}   alt=""></img>
                    <img className="skills" src={this.state.soc}  alt=""></img>
                    <img className="skills" src={this.state.taco} alt=""></img>
                </div>
            </div>
            </div>
        )
    }
}
