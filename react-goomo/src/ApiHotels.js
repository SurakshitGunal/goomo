import React, { Component } from 'react'

class ApiHotels extends Component {
  constructor() {
    super();
    this.state = {
      valuename: [],
    }
    this.input = React.createRef();
  }
  compair = (event) => {
    this.setState({
      contName: this.input.current.value
    })
    if (this.input.current.value === "") { alert("enter name") }
    else {
      var name = this.props && this.props.airpotName
      var result = name && name.filter(airport => airport.con.toLowerCase() === this.input.current.value.toLowerCase())
      let value = [];
      var i;
      for (i = 0; i < 30; i++) {
        value.push(<p>{result[i].an},{result[i].con}</p>)
      }
      console.log(value)
      this.setState({
        valuename: value
      })
    }
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
          </div>
        </form>
        {this.state.valuename}
      </div>
    )
  }
}

export default ApiHotels

//var, let, const: what/why
