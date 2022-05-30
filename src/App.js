import './App.css';
import React, { Component } from 'react'

//1st project backround
import About    from './aboutMe.js'
import Skills from './skills.js'
import Review from './review.js'
import Kpa from './KPA.js'
import Why from './why.js'
import Projects from './projects.js'
import Contact from './contactMe.js'

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            arr: ['About','Skills','Projects','Review','DISC','Why?','Contact'],
            view: 0,
            value: false,
        }
    }

    setView = (val) => {
        if (this.state.view === val) {
            this.setState({ view: 0,  })
            return
        }
        this.setState({ view: val })
    }

    toggle = () => {
        this.setState({
            value: !this.state.value
        })
        console.log(this.state.value);
    }




    render(){
        return (
    <div className="App">

        <div className="navbar">
        <div className= {this.state.value ? "nav-menu.active" : "nav-menu" }>
                {this.state.arr.map((v,i) => {
                    return <p  className="nav-item" onClick={()=> this.setView(i)} key={i+v} >{v}</p>
                })}


        </div>

        <div className={this.state.value ? "hamburger.active" : "hamburger" } onClick={this.toggle}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </div>

        </div>

        {this.state.view === 0 ? <About />    : null}
        {this.state.view === 1 ? <Skills />   : null}
        {this.state.view === 2 ? <Projects /> : null}
        {this.state.view === 3 ? <Review />   : null}
        {this.state.view === 4 ? <Kpa />      : null}
        {this.state.view === 5 ? <Why />      : null}
        {this.state.view === 6 ? <Contact />  : null}

    </div>
        )
    }
}
export default App;
