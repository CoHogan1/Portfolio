import './App.css';
//import React, { useState } from 'react'

function App(){

    const copyDisc = () => {
        const content = 'https://www.discprofile.com/what-is-disc'
        navigator.clipboard.writeText(content)
    }




    return (
        <div className="kpa">
            <h2 onClick={copyDisc} className="headline bg3">
                <a href="https://www.discprofile.com/what-is-disc">DISC Assessment</a>&nbsp;
                copy</h2>

            <div className="d-review bg">
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

            <h2 className="headline bg3">Personality Trait Explanations</h2>


            <div className="value bg">
                <h3>Rapid Problem Solving</h3>
                <p>&emsp;Conner is able to use a quick and intuitive approach to solving</p>
                <p>problems. He likes having new issues to takle every day. He can</p>
                <p>easily dispose of smllae challanges and move to the next one.</p>
            </div>
            <div className="value bg">
                <h3>Socialibility</h3>
                <p>&emsp;Conner displays an easygoing and affable social style, and strives</p>
                <p>to maintainpositive and stable relationships. He is not motivated</p>
                <p>to play a prominent or influential role in a group activities</p>
                <p>Most often he prefers to work quietly and independantly behind</p>
                <p>the scenes.</p>
            </div>

            <div className="value bg">
                <h3>Vocabulary</h3>
                <p>&emsp;Conner is inquisitive and bright. He is an avid learner who picks</p>
                <p>up new concepts easily and quickly. He is intetested in a wide variety</p>
                <p>of topics and he constantly seeks out new ideas. When processing</p>
                <p>new information he tends to dig deeper into the material to deepen</p>
                <p>his understanding. He is able to grasp subtly and nuance in communications,</p>
                <p>which can positively impact the precision which he interacts with others.</p>
            </div>

            <div className="value bg">
                <h3>Assertiveness</h3>
                <p>&emsp;Conner is a modest and unpretentious person who is not prone to be</p>
                <p>insistent or to impost his point of view. He can be quietly determined,</p>
                <p>however, in completing tasks and in maintaining his personal</p>
                <p>standards and convictions.</p>
            </div>

            <div className="value bg">
                <h3>Responsiveness</h3>
                <p>&emsp;Conner is controlled and cautious in his reactions. He is not very</p>
                <p>excitable or demonstrative, and he prefers to remain low key and </p>
                <p>unobtrusive in his initiatives. He has good tolerance for support</p>
                <p>roles and for extended periods of concentration on specialized tasks.</p>
            </div>

            <div className="value bg">
                <h3>Structure</h3>
                <p>&emsp;Conner has a moderate need for structure, and he can adapt to working</p>
                <p>with relative independence and taking ownership over familiar job </p>
                <p>functions. He tends to be orderly and deliberate, and can focus well</p>
                <p>on important details and routines.</p>
            </div>

            <div className="value bg">
                <h3>Logical Problem Solving</h3>
                <p>&emsp;Rather than pulling poblems apart and solving them in a step-by-step</p>
                <p>manner, Conner will insted look for a quicker way to resolve complex</p>
                <p> problems.</p>
            </div>

            <div className="value bg">
                <h3>Intensity</h3>
                <p>&emsp;Conner will tend to avoid direct conflict while on the job. He seeks</p>
                <p>to understand the cause of an issue before determining a course of action</p>
                <p>He feels most comfortable in cooperative situations.</p>
            </div>

            <div className="value bg">
                <h3>Adapability</h3>
                <p>&emsp;He is an independant-minded, and he will generally cooperate with others</p>
                <p>on a practical basis. He has definite ideas and standards of his own</p>
                <p>however, he will not be quick to compromise.</p>
            </div>

            <div className="value bg">
                <h3>Optimism</h3>
                <p>&emsp;Conner is not outwardly effusive or gregarious and tends to maintain</p>
                <p>a healthy skepticism in his approach and outlook. He has the ability to</p>
                <p>visualize things and anticipate what migh go wrong or what may not</p>
                <p> turned out as planned.</p>
            </div>

            <div className="value bg">
                <h3>Spatial visualization</h3>
                <p>&emsp;Conner can visualize three dimensional structures and complex systems.</p>
                <p>He can think about problems in which there are multiple variables</p>
                <p>that are changing. He is also able to use technology solutions to solve</p>
                <p>problems. This talent will help him with a variety of tasks, including</p>
                <p>financial, technical, mechanical, mathematical, and engineering problems.</p>
            </div>
        </div>
    )
}

export default App
