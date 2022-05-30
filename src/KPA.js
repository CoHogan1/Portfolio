import './App.css';
//import React, { useState } from 'react'

function App(){

    const copyDisc = () => {
        const content = 'https://www.discprofile.com/what-is-disc'
        navigator.clipboard.writeText(content)
    }




    return (
        <div className="kpa">
            <h2 onClick={copyDisc}>
                <a href="https://www.discprofile.com/what-is-disc">DISC Assessment</a>&nbsp;
                copy</h2>

            <div className="d-review">
                    Conner will work well with things ans ideas. He will exhibit patience
                in the completion of his work. He will want to actively move forward
                while still doing his work within established procedures and methodology.
                He has moderate assertive tendencies which he channels most comfortably
                toward task-directed or analyticial problem-solving activities. He is
                less confident utilizing agressive social behavior but can initiate action in
                familiar situations. He solves problems very quickly, but maintains good
                behavioral control and self-discipline. He is able to keep his focus on specific
                objectives and is not easily rushed or distracted by outside influence.
                <br/>
                <br/>
                    He will be adaptable and considerate of normal standards and expectations,
                but he will basehis actions on reason rather than on people's opinions.
                He will not make consession on important issues just to satisfy others. He
                likes good structure and predictability. He feels a basic need to maintain control
                over his work and to do what is right in order to avoid errors or
                other negative consquesnces. He will not tend to seek out authoritive
                leadership roles. He will tend to employ a more consensual style of management
                and will be purposeful in his relationships.
                <br/>
                <br/>
                    Conner maintains an appropiate degree of interest in people. He works
                best in the company of familiar people he has come to know and
                understand over a period of time. He regularly looks for potential
                problems and may worry about their impact on his work. He avoids direct
                conflict and seeks cooperative conclusions to difficult situations. He
                is practical and reasonable in his approach to finding acceptable resolutions.
                <br/>
                <br/>
                He generally takes a quick, intuitive approach to solving problems, and
                he prefers a job with new problems to solve. He does not like working carefully
                through more complex problems.
            </div>

        </div>
    )
}

export default App
