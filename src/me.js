import './App.css';
import React, { Component } from 'react'
import picture from './me.png'
import js      from './js-logo.png'
import python  from './python-logo.png'
import jquery  from './jquery-logo.png'
import react   from './react-logo.png'
import node    from './node-logo.png'
import flask   from './flask-logo.png'
import mongoDB from './mongo-logo.png'
import sql     from './post-sql-logo.png'
import css     from './css-logo.png'
import html    from './html5.png'
import exp     from './exp.png'
import socket  from './socket.png'
import taco    from './taco.png'
import pie     from './pie.png'

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
                <div className="picHead">
                    <img src={this.state.me} className="pic" alt=""/>
                </div>
                <div className="inner">
                    <br></br>
                    <h1>Software Developer</h1>
                    <h3>Skills</h3>
                    <p>JavaScript Father Python3 React jQuery<br></br> Flask SQL MongoDB Categorizing Cooking Tacos</p>
                    <br></br>
                    <div>
                        <img className="skills" src={this.state.html}></img>
                        <img className="skills" src={this.state.css}></img>
                        <img className="skills" src={this.state.js}></img>
                        <img className="skills" src={this.state.py}></img>
                        <img className="skills" src={this.state.no}></img>
                        <img className="skills" src={this.state.re}></img>
                        <img className="skills" src={this.state.fl}></img>
                        <br></br>
                        <img className="skills" src={this.state.mD}></img>
                        <img className="skills" src={this.state.pie}></img>
                        <img className="skills" src={this.state.sq}></img>
                        <img className="skills" src={this.state.jq}></img>
                        <img className="skills" src={this.state.ex}></img>
                        <img className="skills" src={this.state.soc}></img>
                        <img className="skills" src={this.state.taco}></img>
                    </div>
                </div>
            </div>
        )
    }
}
