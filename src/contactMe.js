import './App.css';
import React, { useState } from 'react'
// add icons to each option.

function App(){
    let [clip, setClip ]  = useState(null)


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

            <p>Click to copy</p>
            <div className="c-list">
                <p onClick={copyPhone}>Phone </p>
                <p onClick={copyEmail} ><a href="mailto: ConnerRHogan@gmail.com">Email</a> </p>
                <p onClick={copyLinkedin} ><a href='http://www.linkedin.com/in/conner-hogan-40b39b37'>Linkedin</a> </p>
                <p onClick={copyGithub} ><a href='http://www.github.com/CoHogan1' >Github</a> </p>
                <p onClick={copyPhone} >Colorado</p>
            </div>

            <div className='clipboard'>
                {/* clipboard image here*/}
                <p>{clip}</p>
            </div>



        </div>
    )
}
export default App;
