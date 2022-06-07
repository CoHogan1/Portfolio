import './App.css';
import { useState } from "react";

// skill icons.
import css      from './images/css-logo.png'
import html     from './images/html5.png'
import js       from './images/js-logo.png'
import python3   from './images/python-logo.png'
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
// cetifications
import GA    from './images/GA.png'
import pyc   from './images/python3c.png'
import jsc   from './images/jsc.png'
import jqc   from './images/jqc.png'
import cssc  from './images/cssc.png'
import htmlc from './images/htmlc.png'
// import hack from './images/hack.png'

import hGold from './images/hackerrankGold.png'
import hJSb from './images/hackerrankJSBasic.png'
import hpy from './images/hackerrankPython.png'

let skillArr = [html, css, js, python3, jquery, react, node, flask, mongoDB, sql,
    api, exp, socket, taco]

let words = ['HTML','CSS','Java-script', 'Python3', 'jQuery','React','Node.js',
'Flask','MongoDb','SQL','API','EXP','Socket.io','Tacos']

let qual = [GA, hJSb, hGold, hpy, htmlc, cssc, jsc, jqc, pyc]
let name= ["General-Assembly FullStack", 'Hackerrank Javascript', 'Hackerrank Problem Solving',
'Hackerrank Python','HTML SoloLearn', 'CSS SoloLearn','Java-script SoloLearn','jQuery SoloLearn',
'Python SoloLearn']

function App(){
    let [skills] = useState(skillArr)

    return(
        <div className="skills">

        <h2 className="bg">Software Skills +</h2>
        <div className="skill-container bg">

            {skills.map((v,i) => {
                return  <div  className="skill-box" key={i}>
                        <img src={v} alt="idk" loading="lazy"  key={i} className="img"/>
                        <p>{words[i]}</p>
                        </div>
            })}
        </div>

        <h2 className="and bg">Certification</h2>

        <section className="certifications bg">
            {qual.map((v,i) => {

                return  <div className="banner" key={i} >
                        <img src={v} alt="cert img" loading="lazy" className="certs" />
                        <p>{name[i]}</p>
                        </div>

            })}
            <div className="certs">More pending :)</div>
        </section>

        </div>
    )

}

export default App;
