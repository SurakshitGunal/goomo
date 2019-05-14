import React, { Component } from 'react'

class ApiHotels extends Component {
  constructor() {
    super();
    this.state = {
      contName: "",
      airportcont: this.props && this.props.airportsName,
      resultname: "",
      valuename: [],
    }
    this.input = React.createRef();
  }
  compair = (event) => {
    this.setState({
      contName: this.input.current.value
    })
    console.log(this.input.current.value)
    console.log(this.props)
    var x = this.props && this.props.airpotName.map(airportName => (airportName.con))
    console.log("x");
    console.log(x);
    let result = this.props && this.props.airpotName.filter(airportName => airportName.con === this.input.current.value);
    this.setState({
      resultname: result
    })
    this.airportNameAndCont(result)
    console.log(result)
    console.log("result")
    var contairportnames = result.map(result => result.an)
    console.log(contairportnames)
    var contairpotcontry = result.map(result => result.con)
    console.log(contairpotcontry)


  }
  airportNameAndCont = (result) => {
    let value = [];
    var i;
    console.log("array size")
    for (i = 0; i < 20; i++) {
      value.push(<p>{result[i].an},{result[i].con}</p>)
    }
    console.log("hello ", value)
    this.setState({
      valuename: value
    })
  }
  render() {
    return (
      <div>
        <form>
          <label>
            Name:
              <input type="text" ref={this.input} />
          </label>
          <input type="button" value="Submit" onClick={this.compair} />
          <div>
            {this.result && this.result(this.result.an)}
          </div>
        </form>
        {this.state.valuename}
      </div>
    )
  }
}

export default ApiHotels
