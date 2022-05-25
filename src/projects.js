import './App.css';
import React, { useState } from 'react'

//1st project backround
import About     from './aboutMe.js'
import color1    from './images/2color.png'
import brain1    from './images/brain_defogger.png'
import vaca1     from './images/vacation.png'
import checkers1 from './images/checkers.png'
import madLib    from './images/madlib1.png'
// 2nd project backgroundls
import color2    from './images/color_2.png'
import brain2    from './images/dark-brain.png'
import vaca2     from './images/vaca-2.png'
import checkers2 from './images/dark-checkers.png'
// updated Projects
import brain3    from './images/project2update.png'
import color3    from './images/colorGame.png'


function App(){
    return(
        <div className="projects">


        <div className="project one">
            <div className="project-disc">
                <h2>A Color Game</h2>
                <img src={color1} alt="project1" loading="lazy"></img>
                <img src={color2} alt="project1" loading="lazy"></img>
                <img src={color3} alt="project1" loading="lazy"></img>
                <h3>HTML, CSS, Jquery</h3>
                <h4>Fullstack application</h4>
                <p>I played a game silimar to this when I was younger.</p>
                <p>I wanted to share the game that I enjoyed so much.</p>
                <p>Test your vision, your reading speed, and your reaction time</p>
            </div>
        </div>


        <div className="project two">
            <h3>Brain Defogger Methods</h3>
            <div className="project-disc">
                <img src={brain1} alt="project2" loading="lazy"></img>
                <img src={brain2} alt="project2" loading="lazy"></img>
                <img src={brain3} alt="project2" loading="lazy"></img>

                <h4>HTML, CSS, JSX, MongoDb, Node.js, Express, Java-script</h4>
                <h5>Fullstack application</h5>
                <p>My first full CRUD project.</p>
                <p>This app allows you to keep track of idea, and methods to help relieve brain fog</p>
            </div>
        </div>

        <div className="project three">
            <h3>Black Box Vacations</h3>
            <div className="project-disc">
                <img src={vaca1} alt="project3" loading="lazy"></img>
                <img src={vaca2} alt="project3" loading="lazy"></img>

                <h4>React, Express, MongoDb, java-script</h4>
                <h5>Fullstack application</h5>
                <p>A group project in school. a MERN stack project</p>
                <p>This app will get you flight ticket prices, hotel </p>
                <p>near your dates, and predicted weather.</p>
            </div>
        </div>

        <div className="project four">
            <h3>Multiplayer Checkers</h3>
            <div className="project-disc">
                <img src={checkers1} alt="project4" loading="lazy"></img>
                <img src={checkers2} alt="project4" loading="lazy"></img>

                <h4>React, Flask, SQL, Socket.io</h4>
                <h5>Fullstack application</h5>
                <p>Multiplayer checkers, with a chat box between players.</p>
                <p>This app I wanted to learn a new skill with Socket.io.</p>
            </div>
        </div>

        <div className="project five">
            <h3>Mad-lib reader</h3>
            <div className="project-disc">
            <img src={madLib} alt="project5" loading="lazy"></img>

                <h4>React, Java-script</h4>
                <h5>Front-end application</h5>
                <p>A virtual Mad lib, that also reads your story.</p>
                <p>I made this for my kids to play around with, also </p>
                <p>to get experience with Javascripts text-to-speech library.</p>

            </div>
        </div>

        <div className="project six">
            <h3>Lili's Learing</h3>
                <div className="project-disc">
                <p>Images Pending.</p>
                <h4>Javascript, React</h4>
                <h5>Front-end application</h5>
                <p>Practice learning basic skills</p>
                <p>I made this as a base project for online learning. I have </p>
                <p>plans for bigger projects</p>
                </div>
        </div>
        </div>
    )
}
export default App;
