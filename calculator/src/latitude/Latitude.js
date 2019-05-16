import React, { Component } from 'react'
import './Latitude.css'

class Latitude extends Component {
    constructor() {
        super();
        this.state = {
            data: null,
            inputname: "",
            textinput: "",
            valuename:[]
        }
    }
    componentDidMount() {
        fetch('https://api.goomo.team/int/master/v2.0/flights/airports')
            .then(response => response.json())
            .then(data => this.setState({ data }));
    }
    compair = () => {
        var comparibledata = this.state.data && this.state.data.airports
        console.log(comparibledata)
        var inputname = document.getElementById("textinput").value
        console.log(inputname)
        var comapiring = this.state.data && this.state.data.airports && this.state.data && this.state.data.airports.filter(airport => airport.con.toLowerCase() === inputname.toLowerCase())
        console.log(comapiring,"compairing")
        let value = [];
        var i;
        for (i = 0; i < comapiring.length; i++) {
            value.push(<p> Name : { comapiring[i].cn} , Latitude:{comapiring[i].lat} , Longitude:{comapiring[i].lon}</p>)
        }
        console.log(value,"value")
        this.setState({
            valuename: value
          })
    }
    render() {
        console.log("hello", this.state.data)
        return (
            <div>
                <div className="main">
                    Contry Name :
                <input type="text" id="textinput"></input>
                    <button onClick={this.compair}>Submit</button>
                    {this.state.valuename}
                </div>
            </div>
        )
    }
}

export default Latitude
