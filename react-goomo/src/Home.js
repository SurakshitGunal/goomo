import React from 'react';
import Flights from './Flights.js'
import Hotels from './Hotels.js'

class Home extends React.Component{
    
    state = {
        showFlights: false,
        showHotels:false
    }
    fl = () => {
        if(this.state.showFlights){
            console.log("hello")
        this.setState({
            showFlights: false,
            showHotels:false,
        })
        }else{
            console.log("world")
            this.setState({
                showFlights:true,
                showHotels:false,
            })
        }
    }
    ho = () => {
        if(this.state.showHotels){
            console.log("hello")
        this.setState({
            showFlights: false,
            showHotels:false,
        })
        }else{
            console.log("world")
            this.setState({
                showFlights:false,
                showHotels:true,
            })
        }
    }
    render () {
        return(
            <div>
            <div><button onClick={this.fl}>Flights</button></div>
            {this.state.showFlights && <div><Flights/></div>}
            <div><button onClick={this.ho}>Hotels</button></div>
            {this.state.showHotels && <div><Hotels/></div>}
            </div>
        );

    }
}
export default Home;