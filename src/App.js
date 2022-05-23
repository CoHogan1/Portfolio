import './App.css';
import React, { Component } from 'react'

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
// tools
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
// skills
import GA    from './images/GA.png'
import pyc   from './images/python3c.png'
import jsc   from './images/jsc.png'
import jqc   from './images/jqc.png'
import cssc  from './images/cssc.png'
import htmlc from './images/htmlc.png'



// new app.
import Skills from './skills.js'
import Review from './review.js'
import Why from './why.js'
import Projects from './projects.js'
import Contact from './contactMe.js'

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            me:   true,
            arr: ['About','Skills','Projects','Review','Why?','Contact'],
            view: 0,
            pyc:   pyc,
            jsc:   jsc,
            jqc:   jqc,
            cssc:  cssc,
            htmlc: htmlc,
            p1:    color,
            p2:    brain,
            p3:    vaca,
            p4:    checkers,
            p12:   col2,
            p22:   darkB,
            p32:   vac2,
            p42:   darkC,
            js:    js,
            py:    python,
            jq:    jquery,
            re:    react,
            no:    node,
            fl:    flask,
            mD:    mongoDB,
            sq:    sql,
            css:   css,
            html:  html,
            api:   api,
            soc:   socket,
            ex:    exp,
            taco:  taco,
            ga:    GA,
        }
    }



    setView = (val) => {
        if (this.state.view === val) {
            this.setState({ view: 0,  })
            return
        }
        this.setState({ view: val })
    }

    render(){
        return (
    <div className="App">

        <div className="nav">
            {this.state.arr.map((v,i) => {
                return <p onClick={()=> this.setView(i)} key={i}>{v}</p>
            })}
        </div>

        {this.state.view === 0 ? <About />    : null}
        {this.state.view === 1 ? <Skills />   : null}
        {this.state.view === 2 ? <Projects /> : null}
        {this.state.view === 3 ? <Review />   : null}
        {this.state.view === 4 ? <Why />      : null}
        {this.state.view === 5 ? <Contact />  : null}

        {/*  <About/>    */}
        {/* <Skills />   */}
        {/* <Projects /> */}
        {/*  <Review />  */}
        {/* <Why />      */}
        {/* <Contact />  */}


    {/* }<div className="project-review one">
    <h2>Debbie S. Brannon -Fellow GA Alumni.</h2>
    <ul>
    <li>Conner and I are enrolled in a Software Engineering Bootcamp together.
    Not only does he have an execellent grasp on the material, but he shares
    his knowledge with other members of the group. He played a tremendous role in
    stregnthing my confidence in React through his recommendations of outside
    resources. Conner is an incredible team player.
    </li>
    </ul>
    </div>

    <div className="project pOne">
    <div>
        <h1>Guess The Color</h1>
        <img className="proPic" src={this.state.p1} alt=""></img>
    </div>
    <div>
        <p>This game will test your eyes, reaction time, and reading speed.
        You have to chose the correct color a series of different colors. The
        text is written in the correct color, but this app is designed to trick
        you. </p>
        <div className="spacer"></div>
        <div className="skill-contianer">
        <img className="skills" src={this.state.html} alt="" ></img>
        <img className="skills" src={this.state.css}  alt="" ></img>
        <img className="skills" src={this.state.js}   alt="" ></img>
        <img className="skills" src={this.state.taco} alt="" ></img>
        </div>
    </div>
    </div>

    <div className="project pTwo">
        <div>
        <h1>Brain Defogger</h1>
        <img className="proPic" src={this.state.p2} alt=""></img><img className="proPic" src={this.state.p22} alt=""></img>
        </div>

        <div>
        <p>This app will allow you to keep track of methods you use
            to clear your own brain fog. This includes a rating system,
            personal notes, and even a delete button in case you find
            a better method.</p>
        <div className="spacer"></div>
        <div className="skill-contianer">
            <img className="skills" src={this.state.html} alt="" ></img>
            <img className="skills" src={this.state.css}  alt="" ></img>
            <img className="skills" src={this.state.js}   alt="" ></img>
            <img className="skills" src={this.state.no}   alt="" ></img>
            <img className="skills" src={this.state.mD}   alt="" ></img>
            <img className="skills" src={this.state.taco} alt="" ></img>
        </div>
        </div>

    </div>
    <div className="project pThree">
        <div>
            <h1>Travel Assistant</h1>
            <img className="proPic" src={this.state.p3} alt=""></img>
        </div>

        <div>
        <p>This app will assist your vacation planning. Utilizing
            various APIs you can get local hotels, restaurants,
            available bookings,  hotel ratings, and even predicted
            weather for your vacation</p>
        <div className="spacer"></div>
        <div className="skill-contianer">
            <img className="skills" src={this.state.re}   alt="" ></img>
            <img className="skills" src={this.state.css}  alt="" ></img>
            <img className="skills" src={this.state.js}   alt="" ></img>
            <img className="skills" src={this.state.no}   alt="" ></img>
            <img className="skills" src={this.state.mD}   alt="" ></img>
            <img className="skills" src={this.state.api}  alt="" ></img>
            <img className="skills" src={this.state.taco} alt="" ></img>
        </div>
        </div>


    </div>
    <div className="project pFour">
        <div>
            <h1>Multiplayer Checkers</h1>
            <img  className="proPic"src={this.state.p4} alt="" ></img><img  className="proPic"src={this.state.p42} alt=""></img>
        </div>
        <div>
        <p>This app will allow you to play a game of checkers with
            a friend. There is also a chat feature allowing you to
            chat with your friend while playing. I added a second
            color scheme, and a dark mode.
        </p>
        <div className="spacer"></div>
        <div className="skill-contianer">
            <img className="skills" src={this.state.css}  alt="" ></img>
            <img className="skills" src={this.state.js}   alt="" ></img>
            <img className="skills" src={this.state.py}   alt="" ></img>
            <img className="skills" src={this.state.fl}   alt="" ></img>
            <img className="skills" src={this.state.sq}   alt="" ></img>
            <img className="skills" src={this.state.re}   alt="" ></img>
            <img className="skills" src={this.state.soc}  alt="" ></img>
            <img className="skills" src={this.state.taco} alt="" ></img>
        </div>
        </div>
    </div>

    <div className="project-review two">
    <h2>Tracey Lucero ~ 2017</h2>
    <ul>
        <li>Conner has a great personality, and is very approachable and a hard worker.
            Conner continues to show his worth and value for the department and CoorsTek.
            I would like him to continue on his path, and great things will be in his future.
        </li>
        <li>Conner has been dilligent on completing his weekly clean up and monthly pm
            in a timely manner. Conner swiftly completes tasks that are assigned to him
            outside of his regular duties.
        </li>
        <li>Conner does a good job of making internal customers a priority. He works hard
            to minimize scrap for each department by addressing kiln issues when issues
            arise.
        </li>
        <li>Conner works well in a team atmosphere by helping his team mates in whatever they need.
            Conner works the graveyard shift and having a forklift license, allows him
            to change tanks for the press operators since they don't always have forklift
            operators on the graveyard shift.
        </li>
        <li>Conner does a good job bringing up issues within the department and can do
            so without disrespecting his fellow team members. With the ammount of time
            Conner has been in the department, I would like to see him to take more of a
            leadership role with the newer firemen.
        </li>
        <li>Conner is accountable for his actions, but I want him to be more vested in
            how actions of others in the department can have an impact on the team. I.e.
            when he sees other team members not preforming to an acceptable level, address
            their behavior. To let them (other team members) know, that their actions
            can affect the team as a whole.
        </li>
        <li>Conner dows a great job in making improvements in the department. By painting
            areas to give them new life. Conner continues looking at ways to make improvements
            in and around the department. I would like to see Conner give feedback on
            ways to upgrade aging equipment and to help move the firing group towards better
            equipment and controls.
        </li>
    </ul>
    </div>

    <div className="project-review three">
    <h2>Bryce Dyer ~ 2018</h2>
    <ul>
        <li>Conner works well with others and is easy to work with. He does a good job
            of working with his partneres to achieve a larger outcomes than he would
            be capable of on his own. In addition I believe he does a good job of
            asking for help to make hobs safer on the off shift and not taking any
            chances by trying to complete a task on his own.
        </li>

        <li>Conner communicates clearly and adressed issues with the appropiate individuals.
        </li>

        <li>Conner does not shy away from conversation positive or negative. He is
            mindful of his actions and impact on the team and takes critique well.
        </li>

        <li>Conner always has ideas and ways to improve. His attention to detail is one
            of his strongest attributes. He is proactive in his assign kiln and clean up
            as well as general departmental areas.
        </li>

        <li>Conner works hard and stays engaged during his shift and is proactive when
            it comes to improving the work environment by organizing and cleaning. He
            constantly makes his pushes on time and loads the correct profiles directly
            contributing to our on time delivery goal.
        </li>

        <li>Conner is engaged in out Tier one meetings. He has participated in safety
            in the workplace by utilizing Near Miss. He actively works on his assigned PM's
            and clean up area, keeping it clean and orderly.
        </li>
    </ul>

    </div>

    <div className="project-review four">
    <h2>Bryce Dyer ~ 2019</h2>
    <ul>
        <li>Conner is a team player willling to help out on any project and willing
            to cover shifts. Conner works well with the group. He has good attention
            to detail and a good eye for potential safety concerns. Conner has worked
            with Ryan Stutheit our newest Tech and has done a great job of working with
            him, training him on issues as they arise.
        </li>
        <li>Successfully trained new graveyard employee on all kilns that have not moved
            out of the plant. Not to take away from his efforts, he does a great job
            every day all shift long.He brings attention to details, and a great understanding
            to both night shifts.
        </li>
        <li>Conner and Howard have worked together to create an improved checklist. This
            checklist is updated with the current kilns and eliminates waste by eliminating
            checks on items that are no longer in service.
        </li>
        <li>Conner over this last year has worked along side and with our newest tech Ryan
            Stutheit. He has helped train and teach Ryan educating him on how to be efficient and
            do his job with less waste embracing the 8 wastes. I believe that Conner's
            willingness to help guid Ryan shows his commitment to reducing waste as well
            as create a culture in the department of problem solving and collaboration.
        </li>
        <li>Conner communicates clearly and addressed issues with the appropiate individuals.
        </li>
        <li>Conner does not shy away from conversation positive or negative. He is mindful
            of his actions and impact on the team and takes critique well.
        </li>
        <li>Conner always has ideas and ways to improve, his attention to detail is one
            his strongest attributes. He is proactive in his assigned kiln and clean up
            as well as general deparmental areas.
        </li>
    </ul>
    </div>

    <div className="project-review five">
    <h2>Alejandro Tovar ~ 2020</h2>
    <ul>
        <li>2020 has been a challenging year. The COVID 19 pandemic has pushed us into
            a new/different environment. The year Conner did not let the pandemic cause
            a negative impact with his productivity. Conner takes his work seriously
            and is an asset to out team. Than you, Conner, for all that you do, and
            good job in 2020!
        </li>
        <li>Conner and team are daily making sure the kilns are funning optimally. Conner and
            team know that they may not directly respincible for this metric, but their
            understanding their role and duty makes sure the kilns are not producing
            bad product.
        </li>
        <li>Conner and team take their role here at 9th street seriously. Conner and
            team understand how important their role is to the success of the plant.
            Preforming the monthly tunes and PM's are so criticalto controlling cost
            and maintaining a productive shop floor.
        </li>
        <li>Conner understands how what he does daily can afect the customer. He takes
            pride in his work and is always trying to do the right thing, with the customers
            best interest in mind.
        </li>
        <li>There is a very limites presence on the graveyard/ swing shifts. Conner and team
            understand that, and they and the other departments collaborate well to
            help each other complete tasks that require more resources.
        </li>
        <li>Conner is comfotable respectfully expressing his concerns with his peers
            and management. Conner Understands his responsibilities well, he values
            his teammates and their input.
        </li>
        <li>Conner has a lot of technical knowledge. He likes to use that knowledge to
            help support the evolution of the team in hopes to help solve future problems.
        </li>
    </ul>
    </div>
    <div className="project-review six">
    <h2>Dean Trebilcock ~ 2021</h2>
    <ul>
        <li>pending..... 06/2022</li>
    </ul>
    </div> */}
    </div>
        )
    }
}
export default App;
