import './App.css';
import React, { useState } from 'react'

// add icons to each option.


// <p><a href="mailto: ConnerRHogan@gmail.com">Email</a></p>

function App(){
    let [test, setTest ]  = useState(0)



    const copyPhone = () => {
        const content = `720-338-5637`
        navigator.clipboard.writeText(content)
    }

    const copyEmail = () => {
        const content = 'ConnerRHogan@gmail.com'
        navigator.clipboard.writeText(content)
    }

    const copyLinkedin = () => {
        const content = 'http://www.linkedin.com/in/conner-hogan-40b39b37'
        navigator.clipboard.writeText(content)
    }

    const copyGithub = () => {
        const content = 'http://www.github.com/CoHogan1'
        navigator.clipboard.writeText(content)
    }

    return(
        <div className="contact">
            <ul>
                <li>Phone</li>
                <li>E-mail</li>
                <li>Linkedin</li>
                <li>Github</li>
                <li>Located: Colorado</li>
            </ul>
        </div>
    )
}
export default App;
