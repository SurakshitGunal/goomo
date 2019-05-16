import React, { Component } from 'react'
import Calculator from './Calculator';
import Latitude from './latitude/Latitude.js'
import Password from './password/Password.js'

export class Home extends Component {
    state = {
        showcalci: false,
        showlati: false,
        showpass: false
    }
    calci = () => this.setState({
        showcalci: true,
        showlati: false,
        showpass:false
    })
    lati = () => this.setState({
        showcalci: false,
        showlati: true,
        showpass:false
    })
    pass = () => this.setState({
        showcalci: false,
        showlati: false,
        showpass:true
    })

    render() {
        return (
            <div>
                <div><button onClick={this.calci}>Calculator</button></div>
                {this.state.showcalci && <div><Calculator /></div>}
                <div><button onClick={this.lati}>Latitude</button></div>
                {this.state.showlati && <div><Latitude /></div>}
                <div><button onClick={this.pass}>Password</button></div>
                {this.state.showpass && <div><Password /></div>}
            </div>
        )
    }
}

export default Home
