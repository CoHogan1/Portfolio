import './App.css';
import React, { useState } from 'react'

// skill icons.
import css      from './images/css-logo.png'
import html     from './images/html5.png'
import js       from './images/js-logo.png'
import python   from './images/python-logo.png'
import jquery   from './images/jquery-logo.png'
import react    from './images/react-logo.png'
import node     from './images/node-logo.png'
import flask    from './images/flask-logo.png'
import mongoDB  from './images/mongo-logo.png'
import sql      from './images/post-sql-logo.png'
import api      from './images/api.png'
import exp      from './images/exp.png'
import socket   from './images/socket.png'
import taco     from './images/taco.png'



let skillArr = [css, html, js, python, jquery, react, node, flask, mongoDB, sql, api, exp, socket, taco]

function App(){
    let [test, setTest ] = useState(0)
    let [skills, setSkills] = useState(skillArr)






    return(
        <div className="skills">
        <p>{test}</p>
        <div>skills</div>
        <ul>
            {skills.map((v,i) => {
                return <li  className="skill-box" key={i}><img src={v} alt="idk"></img></li>
            })}


        </ul>

        </div>
    )
}

export default App;
