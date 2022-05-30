import './App.css';
import React, { useState } from 'react'

import copy  from './images/copy.jpg'

function App(){
    let [clip, setClip]  = useState(null)


    const copyPhone = () => {
        const content = `720-338-5637`
        navigator.clipboard.writeText(content)
        setClip(content)
    }

    const copyEmail = () => {
        const content = 'ConnerRHogan@gmail.com'
        navigator.clipboard.writeText(content)
        setClip('Email copied')
    }

    const copyLinkedin = () => {
        const content = 'http://www.linkedin.com/in/conner-hogan-40b39b37'
        navigator.clipboard.writeText(content)
        setClip('Linkedin link')
    }

    const copyGithub = () => {
        const content = 'http://www.github.com/CoHogan1'
        navigator.clipboard.writeText(content)
        setClip('Github link')
    }


    return(
        <div className="contact">

            <div className="c-list">
                <p>Phone<img className="icon" onClick={copyPhone} src={copy} alt="copy icon"/></p>

                <p><a href="mailto: ConnerRHogan@gmail.com">Email</a>
                <img className="icon" onClick={copyEmail} src={copy} alt="copy icon"/></p>

                <p><a href='http://www.linkedin.com/in/conner-hogan-40b39b37'>Linkedin</a>
                <img className="icon" onClick={copyLinkedin} src={copy} alt="copy icon"/> </p>

                <p><a href='http://www.github.com/CoHogan1' >Github</a>
                <img className="icon" onClick={copyGithub} src={copy} alt="copy icon"/> </p>
            </div>


            <div className="back">
                <div className='clipboard'>
                    <p>{clip}</p>
                </div>
            </div>



        </div>
    )
}
export default App;
