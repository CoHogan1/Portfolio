import './App.css';
import React, { useState } from 'react'

//1st project backround
import About    from './aboutMe.js'
import color    from './images/colorGame.png'
import brain    from './images/brain_defogger.png'
import vaca     from './images/vacation.png'
import checkers from './images/checkers.png'
// 2nd project backgroundls
import col2     from './images/color_2.png'
import darkB    from './images/dark-brain.png'
import vac2     from './images/vaca-2.png'
import darkC    from './images/dark-checkers.png'


function App(){
    return(
        <div className="projects">

        <div className="project one">
            <h3>A Color Game</h3>
            <div className="project-disc">
                <p>image1 here</p>
                <ul>
                    <li>HTML, CSS, Jquery.</li>
                    <li>I played a game silimar to this when I was younger.</li>
                    <li>I wanted to share the game that I enjoyed so much.</li>
                    <li>Test your vision, your reading speed, and your reaction time</li>
                </ul>
            </div>
        </div>


        <div className="project two">
            <h3>Brain Defogger Methods</h3>
            <div className="project-disc">
                <p>images</p>
            </div>
            <ul>
                <li>HTML, CSS, JSX, MongoDb, Node.js, Express, Java-script</li>
                <li>My first full CRUD project.</li>
                <li>This app allows you to keep track of idea, and methods to help relieve brain fog</li>
            </ul>

        </div>

        <div className="project three">
            <h3>Black Box Vacations</h3>
            <div className="project-disc">
            <p>images</p>

            <ul>
                <li>React, Express, MongoDb, java-script</li>
                <li>A group project in school. a MERN stack project</li>
                <li>This app will get you flight ticket prices, hotel near your dates, and predicted weather.</li>
            </ul>
            </div>

        </div>

        <div className="project four">
            <h3>Multiplayer Checkers</h3>
            <div className="project-disc">
            <p>Images</p>
            <ul>
                <li>React, Flask, SQL, Socket.io</li>
                <li>Multiplayer checkers, with a chat box between players.</li>
                <li>This app I wanted to learn a new skill with Socket.io.</li>
            </ul>
            </div>
        </div>

        <div className="project five">
            <h3>Mad-lib reader</h3>
            <div className="project-disc">
            <p>image</p>
            <ul>
                <li>React, Java-script</li>
                <li>A virtual Mad lib, that also reads your story.</li>
                <li>I made this for my kids to play around with, and to get experience with
                    Javascripts text-to-speech library.</li>
            </ul>
            </div>
        </div>

        <div className="project six">
            <h3>Lili's Learing</h3>

            <div className="project-disc">
            <p>images</p>
            <ul>
                <li>Javascript, React</li>
                <li>Practice learning basic skills</li>
                <li>I made this as a base project for online learning. I have plans
                    for bigger projects</li>
            </ul>
            </div>
        </div>

        </div>
    )
}
export default App;
