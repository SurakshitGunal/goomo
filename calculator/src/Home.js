import React, { Component } from 'react'
import Calculator from './Calculator';

export class Home extends Component {
    state = {
        showcalci: false
    }
    calci = () => this.setState({
        showcalci: true
    })

    render() {
        return (
            <div>
                <div><button onClick={this.calci}>Calculator</button></div>
                {this.state.showcalci && <div><Calculator /></div>}
            </div>
        )
    }
}

export default Home
