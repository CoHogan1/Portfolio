import './App.css';
import React, { Component } from 'react'

//1st project backround
import About    from './aboutMe.js'
import Skills from './skills.js'
import Review from './review.js'
import Why from './why.js'
import Projects from './projects.js'
import Contact from './contactMe.js'

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            arr: ['About','Skills','Projects','Review','Why?','Contact'],
            view: 0,
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

        <div className="bar">
        <div className="nav">
                {this.state.arr.map((v,i) => {
                    return <p onClick={()=> this.setView(i)} key={i}>{v}</p>
                })}
        </div>
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
    </div>
        )
    }
}
export default App;
